import { html } from "lit-html";
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrBigDecimal extends AbstractAttrRenderer {
    renderAttrElement(attrDef, value) {
        const { key, inputPattern = null, step = '' } = attrDef;

        return html`
            <input
                type="number"
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                name=${key}
                step=${step}
                pattern=${inputPattern || ''}
                @input=${(e) => this._updateValue(new Number(e.target.value))}
            />
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-bigdecimal')) {
            customElements.define('t11-attr-bigdecimal', AttrBigDecimal);
        }
    }
}

AttrBigDecimal.register();
