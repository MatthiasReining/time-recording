import { html } from "lit-html";
import {
  AbstractWebComponent,
  ContextElement,
} from "../../web_modules/tech11-web-base.js";
import RoutingService from "../control/RoutingService.js";

ContextElement.register();
export default class TimeRecordingAppComponent extends AbstractWebComponent {
  async init() {
    this._data = {};
  }

  postInit() {
    RoutingService.init(this.querySelector("slot"));
  }

  renderComponent() {
    return html`
      <t11-context .value=${this._data}>
        <header>
          Header
          <hr />
        </header>
        <div class="container">
          <slot name="mainContent"></slot>
        </div>
        <footer>
          <hr />
          footer
        </footer>
      </t11-context>
    `;
  }

  static register() {
    if (!customElements.get("t11-time-recording-app")) {
      customElements.define(
        "t11-time-recording-app",
        TimeRecordingAppComponent
      );
    }
  }
}
TimeRecordingAppComponent.register();
