import { html } from '../../web_modules/lit-html.js';
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrLocaleDate extends AbstractAttrRenderer {
    renderAttrElement(attrDef, value) {
        const { key, inputPattern = null } = attrDef;

        return html`
            <input
                type="date"
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                name=${key}
                pattern=${inputPattern || ''}
                @input=${(e) => this._updateValue(e.target.value)}
            />
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-locale-date')) {
            customElements.define('t11-attr-locale-date', AttrLocaleDate);
        }
    }
}

AttrLocaleDate.register();
