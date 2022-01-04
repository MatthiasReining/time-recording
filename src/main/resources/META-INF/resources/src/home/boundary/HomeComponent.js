import { html } from "../../web_modules/lit-html.js";
import { AbstractWebComponent } from "../../web_modules/tech11-web-base.js";

export default class HomeComponent extends AbstractWebComponent {
  renderComponent() {
    return html`
      <h1>Home</h1>
      <hr />
      <a href="input">input</a><br />
      <a href="weekly">weekly</a>
    `;
  }

  static register() {
    if (!customElements.get("t11-home")) {
      customElements.define("t11-home", HomeComponent);
    }
  }
}
HomeComponent.register();
