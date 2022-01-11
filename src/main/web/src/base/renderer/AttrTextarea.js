import { html } from "../../web_modules/lit-html.js";
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrTextarea extends AbstractAttrRenderer {
    renderAttrElement(attrDef, value) {
        return html`
            <textarea
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                @input=${(e) => this._updateValue(e.target.value)}
                @mouseover=${() => this._createTooltip()}
            ></textarea>
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-textarea')) {
            customElements.define('t11-attr-textarea', AttrTextarea);
        }
    }
}

AttrTextarea.register();
