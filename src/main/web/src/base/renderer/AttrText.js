import { html } from "../../web_modules/lit-html.js";
import AbstractAttrRenderer from "./AbstractAttrRenderer.js";

export default class AttrText extends AbstractAttrRenderer {
  renderAttrElement(attrDef, value) {
    const { key, inputPattern = null, style, label } = attrDef;

    const placeholder =
      style === "floating" && !attrDef.placeholder
        ? label
        : attrDef.placeholder;
    console.log("attrDef", attrDef, placeholder);

    return html`
      <input
        type="text"
        class="form-control ${attrDef.cssInputAdditionalClasses}"
        .value=${value || ""}
        id=${this.getId(attrDef)}
        name=${key}
        pattern=${inputPattern || ""}
        placeholder=${placeholder}
        @input=${(e) => this._updateValue(e.target.value)}
      />
    `;
  }

  static register() {
    if (!customElements.get("t11-attr-text")) {
      customElements.define("t11-attr-text", AttrText);
    }
  }
}

AttrText.register();
