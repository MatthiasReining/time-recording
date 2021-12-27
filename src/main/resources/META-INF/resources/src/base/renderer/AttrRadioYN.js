import { i18n } from '../../utils/Ti18nFormatter.js';
import { html } from '../../web_modules/lit-html.js';
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrRadioYN extends AbstractAttrRenderer {
    init() {
        super.init();
    }

    _radioButtonChanged(event) {
        const value = event.target.value === 'true';
        this.container[this.attrDef.key] = value;
        this.refreshContext();
        if (this.onValueChanged) this.onValueChanged();
    }

    getAddtionalDataCss() {
        return 'my-2';
    }

    renderAttrElement(attrDef, value) {
        const { key } = attrDef;
        const id = this.getId(attrDef);
        const _uniqueKey = attrDef.uniqueKey || id;
        return html`
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name=${`${key}-${_uniqueKey}`}
                    id=${`${id}-${_uniqueKey}_True`}
                    .value=${true}
                    @change=${(e) => this._radioButtonChanged(e)}
                    ?checked=${value === true}
                />
                <label for=${`${id}-${_uniqueKey}_True`} class="form-check-label">${i18n.msg('YES')}</label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name=${`${key}-${_uniqueKey}`}
                    id=${`${id}-${_uniqueKey}_False`}
                    .value=${false}
                    @change=${(e) => this._radioButtonChanged(e)}
                    ?checked=${value === false}
                />
                <label for=${`${id}-${_uniqueKey}_False`} class="form-check-label"> ${i18n.msg('NO')}</label>
            </div>
        `;
    }

    static register() {
        if (!customElements.get('t11-attr-radio-yn')) {
            customElements.define('t11-attr-radio-yn', AttrRadioYN);
        }
    }
}

AttrRadioYN.register();
