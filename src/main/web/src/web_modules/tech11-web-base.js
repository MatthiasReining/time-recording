import { render, html } from "lit-html";

const registry = new Map();

let messageId = 1000;
let _listenerCounter = 5000;

/**
 * Alternative to CustomEvents for sending messages between classes.
 */
class MessageDispatcher {
  /**
   * Dispatch (broadcast) the msgObj to the given _channel_.
   * The _msgObj_ will be wrapped into a _message_ object with _messageId_ and _detail_.
   *
   * @param {string} channelName the channel where the message is dispatched.
   * @param {object} msgObj the payload
   * @returns {number} a unique messageId for the dispatch transaction.
   */
  static dispatch(channelName, msgObj) {
    const channel = registry.get(channelName);
    if (channel === undefined) return null;

    messageId++;
    const message = {
      messageId,
      detail: msgObj,
    };

    Object.values(channel).forEach((fn) => fn(message));
    return messageId;
  }

  /**
   * Add an listener to the given channel and returns an unqiue listener id.
   * The listener id is required to remove a single listener.
   *
   * @param {string} channelName
   * @param {function} callbackfn
   * @returns unique listener id;
   */
  static addListener(channelName, callbackfn) {
    const _listenerId = _listenerCounter++;

    let channel = {};

    if (registry.has(channelName)) {
      channel = registry.get(channelName);
      if (Object.values(channel).includes(callbackfn)) {
        return null;
      }
    }

    channel[_listenerId] = callbackfn;
    registry.set(channelName, channel);

    return _listenerId;
  }

  static removeListener(listenerId) {
    registry.forEach((channel) => {
      delete channel[listenerId];
    });
  }

  static removeChannel(channelName) {
    registry.delete(channelName);
  }
}

let _contextIdCounter = 6000;

class ContextElement extends HTMLElement {
  constructor() {
    super();
    const contextId = _contextIdCounter++;
    this._messageChannelName = `context-updater-${contextId}`;
    this._listenerId = null;
    // some components might reference this object while it is long gone
    this._valid = false;
  }

  connectedCallback() {
    if (this.value === undefined) {
      throw new Error(
        "'A context element must always have a property 'value'!"
      );
    }
    this._valid = true;
    this.setAttribute("message-channel-name", this._messageChannelName);
  }

  disconnectedCallback() {
    this._valid = false;
    MessageDispatcher.removeChannel(this._messageChannelName);
  }

  /**
   * valueUpdated will fire and 'contextValueChanged' event.
   *
   * The valueUpdated is called after the value of the contextData is already changed.
   * The value is normally directly changed after the contextData is passed by reference to the input components.
   *
   * @param {String} key of the changed attribute
   * @param {String} keyPath of the changed attribute within the data structure (given as jsonPath)
   * @param {object} newValue new value
   * @param {object} oldValue old value
   */
  valueUpdated(key, keyPath, newValue, oldValue) {
    if (!this._valid) return;
    const detail = {
      key,
      keyPath,
      newValue,
      oldValue,
    };
    // console.debug(`ContextElement -> valueUpdated -> detail`, detail, this);
    MessageDispatcher.dispatch(this._messageChannelName, detail);
  }

  /**
   * Add a listener to this context that is informed via the valueUpdated method.
   * @param {function} callbackFn
   * @returns {string} unqiue listenerId
   */
  addListener(callbackFn) {
    if (!this._valid) return null;
    return MessageDispatcher.addListener(this._messageChannelName, callbackFn);
  }

  static getNextContext(htmlElement) {
    return this.getParentContext(htmlElement);
  }

  static getParentContext(htmlElement, id) {
    // as soon as CSS 4 is available with :has you can use CSS selectors
    // https://caniuse.com/#feat=css-has

    const { parentElement } = htmlElement;

    if (parentElement === null) return undefined;

    if (parentElement.tagName !== "T11-CONTEXT") {
      return ContextElement.getParentContext(parentElement, id);
    }

    if (id !== undefined && parentElement.id !== id) {
      return ContextElement.getParentContext(parentElement, id);
    }

    return parentElement;
  }

  static register() {
    if (!customElements.get("t11-context")) {
      customElements.define("t11-context", ContextElement);
    }
  }
}

ContextElement.register();

/* eslint-disable class-methods-use-this */

/**
 * `AbstractWebComponent` should be used for Web Components that are created for the tech11 Insurance Platform.
 *
 * A web component that extends AbstractWebComponent has following features out-of-the-box:
 *
 * * Managing the _Context_ (registering)
 * * Refreshing all nested web components that extends `AbstractWebComponent` by calling `refesh`
 * * Following a clear lifecycle
 * ** Loading (`connectedCallback`) : `preInit`, `init`, `refresh`, `postInit`
 * ** Refresh:  `preRefresh`, `refresh`, `postRefresh`
 * ** Desructor (`disconnectedCallback`): `preDestroy`
 *
 * Preconditions:
 *
 * * There must be a _context_ on this component or in an element arround
 *
 * @export
 * @class AbstractWebComponent
 * @extends {HTMLElement}
 */
class AbstractWebComponent extends HTMLElement {
  /**
   * Lifecycle function of Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks).
   */
  async connectedCallback() {
    this._checkRequiredProperties();
    await this.loadingAnimation();
    await this.preInit();

    // initialize context
    this._initContextPartI();

    await this.init();

    this.refreshComponent();

    // page is now the first time rendered - in case of t11-context is on the page, add a listener
    this._initContextPartII();

    await this.postInit();
  }

  _checkRequiredProperties() {
    if (!this.getRequiredProperties()) return;

    Object.keys(this.getRequiredProperties()).forEach((propName) => {
      if (this[propName] === undefined || this[propName] === null)
        throw new Error(
          `The component ${this.tagName} requires the property '${propName}'!`
        );
    });
  }

  /**
   * All mandatory properties of this component (array of property names)
   * @returns array of required property names of this component
   * @abstract
   */
  getRequiredProperties() {}

  /**
   * Show the default loading animation based on the boolean flag given by `showLoadingAnimation`.
   * In case you want a custom loading animation, please overwrite the method.
   *
   * As precondition to show the animation, the `t11-loading-component` web component must be registered.
   * Here we don't want to have a fix dependency...
   */
  async loadingAnimation() {
    if (!this.showLoadingAnimation()) return;
    render(html` <t11-loading-component></t11-loading-component> `, this);
  }

  /**
   * Overwrite and return `true` if you want to show a loading animation.
   * The loading animation is shown until the first `renderComponent` is called.
   *
   * As precondition to show the animation, the `t11-loading-component` web component must be registered.
   * Here we don't want to have a fix dependency...
   *
   * @returns {boolean} `true` show the loading animantion, else otherwise.
   */
  showLoadingAnimation() {
    return false;
  }

  /**
   * Overwrite if you want to define some data **before** the context is initialized
   * @abstract
   */
  async preInit() {}

  /**
   * Overwrite if you want to define some data **after** the context is initialized
   * from surrounding componets.
   *
   * **But**, the if the context (`<t11-context>`) is first initalized on this component,
   * don't use the context here: use `postInit`.
   *
   * @abstract
   */
  async init() {}

  /**
   * Overwrite, if you want to define some data **after** the context is initialized.
   *
   * In case the context is set on this component itself (`t11-context`) you cannot use the context on `init`.
   *
   * You can first use the context here. Changes on the context within `postInit` requires a
   * manual `this.refreshContext`.
   *
   * @abstract
   */
  async postInit() {}

  _initContextPartI() {
    this.context = ContextElement.getNextContext(this);
    if (this.context)
      this.contextValue = this.context ? this.context.value : {};
  }

  _initContextPartII() {
    const contextElemOnComponent = this.querySelector("t11-context");
    if (contextElemOnComponent) {
      this.context = contextElemOnComponent;
      if (this.context)
        this.contextValue = this.context ? this.context.value : {};
    }
    if (this.context) this.context.addListener(() => this.refreshComponent());
  }

  /**
   * Refresh all components within the current context.
   * @param {string} key key of the udpated data
   * @param {string} keyPath keyPath of the udpated data
   * @param {*} newValue newValue for the update key
   * @param {*} oldValue oldvalue for the udpated key
   */
  refreshContext(key, keyPath, newValue, oldValue) {
    if (!this.context)
      throw new Error(
        `${this.tagName} runs not inside a container! 'refreshContext' is not possible!`
      );

    this.context.valueUpdated(key, keyPath, newValue, oldValue);
  }

  /**
   * Lifecycle function of Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks).
   */
  async disconnectedCallback() {
    this.preDestroy();
  }

  /**
   * Create the contents of this web components. It's called by each refresh of the component.
   *
   * @returns the HTML content of this Web Component.
   * This should be a `html` prepared content from _lit-html_ or an empty string _''_.
   * @abstract
   */
  renderComponent() {
    throw new Error(
      `UnsupportedOperationException: abstract 'renderComponent'`
    );
  }

  /**
   * use refreshComponent!
   * @deprecated use refreshComponent
   */
  refresh(e = {}) {
    this.refreshComponent(e);
  }

  /**
   * Refresh **just this** component. Typically this function is not directly called, instead the function
   * `refreshContenxt` is called where all components within a component are refreshed.
   *
   *
   * By refreshing a component the following lifecycle functions are called:
   *
   * * `preRefresh`
   * * `postRefersh`
   *
   * The component is refreshed by getting the content from `renderComponent` and
   * the `render` function from _lit-html_.
   *
   * For parallel requests there is a stoper built in. So, parallel requestes are not queued
   * but the last on is repeated (a queue makes for a refresh no sense...)
   *
   * @param {Event} e In case of the caller was an event.
   */
  refreshComponent(e = {}) {
    // check for race conditions -> will lead to ugly side effects for rendering (usually based on calucalted valued)
    if (this._refreshInProgress === true) {
      // already rendering, no queing, last event will recalled
      this._refreshParallelRequest = e || true;
      return;
    }
    this._refreshInProgress = true;

    this.preRefresh();

    // render with lit-html
    render(this.renderComponent(), this);

    this.postRefresh();

    this._refreshInProgress = false;
    if (this._refreshParallelRequest) {
      // repeat paralle request with the latest event
      const event = this._refreshParallelRequest;
      this._refreshParallelRequest = false;
      this.refreshComponent(event);
    }
  }

  /**
   * Overwrite if you want to define some data **before** the rendering take place
   * @abstract
   */
  async preRefresh() {}

  /**
   * Overwrite if you want to define some data **after** the rendering took place
   * @abstract
   */
  async postRefresh() {}

  /**
   * Overwrite if you want to define some data **when** the lifecycle
   * function `disconnectedCallback` is executed of the component.
   * @abstract
   */
  async preDestroy() {}
}

export { AbstractWebComponent, ContextElement, MessageDispatcher };
