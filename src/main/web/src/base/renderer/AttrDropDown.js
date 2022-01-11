import { html } from "../../web_modules/lit-html.js";
import { i18n } from '../../utils/Ti18nFormatter.js';
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrDropDown extends AbstractAttrRenderer {
    renderAttrElement(attrDef, value) {
        const { key, selectOptions } = attrDef;

        return html`
            <select
                class="form-control"
                .value=${value}
                id=${this.getId(attrDef)}
                @input=${(e) => this._updateValue(e.target.value)}
            >
                <option></option>
                ${selectOptions.map(
                    (so) => html`
                        <option id=${`option_${key}_${so.key}`} value="${so.key}" ?selected=${so.key === value}>
                            ${i18n.msg(so.label)} ${so.deprecated ? i18n.msg(`DEPRECATED`) : ''}
                        </option>
                    `
                )}
            </select>
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-dropdown')) {
            customElements.define('t11-attr-dropdown', AttrDropDown);
        }
    }
}

AttrDropDown.register();
