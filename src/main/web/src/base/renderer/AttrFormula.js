import { html } from "../../web_modules/lit-html.js";
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrFormula extends AbstractAttrRenderer {
    renderAttrElement(attrDef, value) {
        // this class is a copy of AttrTextarea.
        // a simple extend would also work. But here there will be some more logic in the future
        // code completation...
        return html`
            <textarea
                class="form-control"
                style="font-family: monospace;"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                @input=${(e) => this._updateValue(e.target.value)}
                @mouseover=${() => this._createTooltip()}
            ></textarea>
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-formula')) {
            customElements.define('t11-attr-formula', AttrFormula);
        }
    }
}

AttrFormula.register();
