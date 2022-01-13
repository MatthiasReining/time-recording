import { AbstractWebComponent } from "../../web_modules/tech11-web-base.js";
import { html } from "../../web_modules/lit-html.js";
import { i18n } from "../Ti18nFormatter.js";

const attrDefDefault = {
  label: "LABEL",
  key: null,
  mandatory: false,
  Xstyle: "default",
  style: "floating",
  labelCss: null,
  cssLabelAdditionalClasses: "",
  noLabel: false,
};

export default class AbstractAttrRenderer extends AbstractWebComponent {
  constructor() {
    super();

    /**
     * Attribute definition
     */
    this.attrDef = null;

    /**
     * Container where the attribute is written to.
     *
     * `this.container[this.attrDef.key] = 'value'`
     */
    this.container = null;

    /**
     * Function that is called after the value is changed.
     */
    this.onValueChanged = null;

    /**
     * enriched attribute definition
     */
    this._fullAttrDef = null;
  }

  /**
   * @deprecated
   */
  _createTooltip() {
    // do nothing and wait until the fn can be removed.
  }

  postInit() {
    const tooltipElem = this.querySelector("[data-toggle=tooltip]");
    if (!tooltipElem) return;
    // instead of template use customClass with BS5
    const customClass = "bg-light text-body";
    const options = {
      html: true,
      sanitize: false,
      placement: "top",
      template: `<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner ${customClass}"></div></div>`,
    };

    // eslint-disable-next-line no-undef
    $(tooltipElem).tooltip(options);
  }

  _updateValue(value) {
    const detail = {
      newValue: value,
      oldValue: this.container[this.attrDef.key],
    };
    this.container[this.attrDef.key] = value;
    this.refreshContext();
    if (this.onValueChanged) this.onValueChanged(detail);
  }

  /**
   * Implement rendering of the attribute element
   * @param {Object} attrDef - Attribute Definition
   * @param {Object} value
   * @returns lit-html snippet
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  renderAttrElement(attrDef, value) {
    throw new Error("renderAttrElement must be overwritten!");
  }

  /**
   * The return value is added to the data css div tag
   */
  getAddtionalDataCss() {
    return "";
  }

  getId(attrDef) {
    return attrDef.key.replace(/\./, "-");
  }

  _renderTooltip(tooltip) {
    if (!tooltip) return "";

    const tooltipSnippet = `
            <div class="text-left">
                <h5>${i18n.msg(this.attrDef.label)} <code>${
      this.attrDef.key
    }</code></h5>
                ${tooltip}
            </div>
        `;
    return html`
      <button
        type="button"
        class="btn btn-link btn-sm"
        style="margin: 0; padding:0;"
        data-toggle="tooltip"
        .title=${tooltipSnippet}
      >
        <i class="fas fa-info-circle text-primary"></i>
      </button>
    `;
  }

  renderComponent() {
    // enrich attr definition with default values
    const attrDef = { ...attrDefDefault, ...this.attrDef };

    const {
      label,
      key,
      mandatory,
      tooltip,
      cssRowCols,
      cssLabelColSize = 2,
      cssLabelAdditionalClasses = "",
      cssInputColSize,
      cssInputAdditionalClasses = "",
      labelSuffixFn,
      noLabel,
      labelBeforeEndHTML,
    } = attrDef;
    const value = this.container[key];

    if (noLabel) return this.renderAttrElement(attrDef, value);

    const mandatoryText = mandatory ? "(*)" : "";

    let rowCols = cssRowCols || 1; // default

    if (!cssRowCols) {
      // closet ist king :-) -> https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
      const closestRow = this.closest(".row");
      if (closestRow) {
        [...closestRow.classList].forEach((cl) => {
          const match = cl.match(/row-cols-(\d{1,2})/);
          if (match && match.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            rowCols = match[1];
          }
        });
      }
    }

    const lColSize = cssLabelColSize * rowCols;
    const iColSize = cssInputColSize ? cssInputColSize * rowCols : null;

    const labelCss = `col-sm-${lColSize} col-form-label ${cssLabelAdditionalClasses}`; // default
    const inputCss = `${
      iColSize ? `col-${iColSize}` : "col"
    } ${this.getAddtionalDataCss()}`; // default

    if (attrDef.style === "floating") {
      return html` <div class="form-floating">
          ${this.renderAttrElement(attrDef, value)}
          <label for=${this.getId(attrDef)} class=${cssLabelAdditionalClasses}
            >${i18n.msg(label)} ${mandatoryText}
            ${labelSuffixFn ? labelSuffixFn() : ""}${labelBeforeEndHTML}
            ${this._renderTooltip(tooltip)}
          </label>
        </div>
        `
    }

    return html` <div class="form-group row">
      <label class=${labelCss}
        >${i18n.msg(label)} ${mandatoryText}
        ${labelSuffixFn ? labelSuffixFn() : ""}${labelBeforeEndHTML}
        ${this._renderTooltip(tooltip)}
      </label>

      <div class=${inputCss}>${this.renderAttrElement(attrDef, value)}</div>
    </div>`;
  }
}
