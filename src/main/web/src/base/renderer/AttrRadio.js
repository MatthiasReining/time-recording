import { i18n } from '../../utils/Ti18nFormatter.js';
import { html } from "lit-html";
import AbstractAttrRenderer from './AbstractAttrRenderer.js';

export default class AttrRadio extends AbstractAttrRenderer {
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
        const { key, selectOptions } = attrDef;
        const id = this.getId(attrDef);

        return html`
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name=${key}
                    id=${`${id}_True`}
                    .value=${true}
                    @change=${(e) => this._radioButtonChanged(e)}
                    ?checked=${value === true}
                />
                <label for=${`${id}_True`} class="form-check-label">${i18n.msg('YES')}</label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name=${key}
                    id=${`${id}_False`}
                    .value=${false}
                    @change=${(e) => this._radioButtonChanged(e)}
                    ?checked=${value === false}
                />
                <label for=${`${id}_False`} class="form-check-label"> ${i18n.msg('NO')}</label>
            </div>
        `;
    }

    XXXrenderComponent() {
        // enrich attr definition with default values
        const attrDef = { ...attrDefDefault, ...this.attrDef };

        const { label, key, mandatory, renderColumns } = attrDef;
        const value = this.container[attrDef.key];

        const mandatoryText = mandatory ? '(*)' : '';

        const id = `${this.unqiueId}_${key}`;

        let labelCss = `col-sm-${2 * renderColumns} col-form-label`;
        labelCss = attrDef.labelCss ? attrDef.labelCss : labelCss;

        const valueCss = 'col my-2';

        return html` <div class="form-group row">
            <label class=${labelCss}>${i18n.msg(label)} ${mandatoryText}</label>
            <div class="${valueCss}">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name=${key}
                        id=${`${id}_True`}
                        .value=${true}
                        @change=${(e) => this._radioButtonChanged(e)}
                        ?checked=${value === true}
                    />
                    <label for=${`${id}_True`} class="form-check-label">${i18n.msg('YES')}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name=${key}
                        id=${`${id}_False`}
                        .value=${false}
                        @change=${(e) => this._radioButtonChanged(e)}
                        ?checked=${value === false}
                    />
                    <label for=${`${id}_False`} class="form-check-label"> ${i18n.msg('NO')}</label>
                </div>
            </div>
        </div>`;
    }

    static register() {
        if (!customElements.get('t11-attr-radio')) {
            customElements.define('t11-attr-radio', AttrRadio);
        }
    }
}

AttrRadio.register();
