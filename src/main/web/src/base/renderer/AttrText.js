import { html } from "lit-html";
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrText extends AbstractAttrRenderer {
    renderAttrElement(attrDef, value) {
        const { key, inputPattern = null } = attrDef;

        return html`
            <input
                type="text"
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                name=${key}
                pattern=${inputPattern || ''}
                @input=${(e) => this._updateValue(e.target.value)}
                @mouseover=${() => this._createTooltip(key)}
            />
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-text')) {
            customElements.define('t11-attr-text', AttrText);
        }
    }
}

AttrText.register();
