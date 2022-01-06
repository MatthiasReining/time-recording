import { html } from "lit-html";

import AttrText from "../../base/renderer/AttrText.js";
import UserService from "../../users/boundary/UserService.js";
import {
  AbstractWebComponent,
  ContextElement,
} from "../../web_modules/tech11-web-base.js";
import AttrLocalDate from "../../base/renderer/AttrLocalDate.js";
import TimeRecordsService from "./TimeRecordsService.js";
import AttrBigDecimal from "../../base/renderer/AttrBigDecimal.js";

AttrText.register();
AttrLocalDate.register();
AttrBigDecimal.register;
ContextElement.register();

export default class WeeklyInputComponent extends AbstractWebComponent {
  async init() {
    const weeklyDate = "2022-01-03";

    this._user = await UserService.getCurrentUser();

    this._records = await this._loadTicketsByCurrentUser();

    this._data = {};
  }

  async _loadTicketsByCurrentUser() {
    return TimeRecordsService.get({
      userName: this._user.userName,
    });
  }



  _addRow() {
    this._records.push({"ticketNumber": null});
    this.refreshContext();
  }

  async _updateBackend() {
    await TimeRecordsService.updateAll(this._records);
    this._records = await this._loadTicketsByCurrentUser();
    this.refreshContext();
  }

  renderComponent() {
    return html`
      <t11-context .value=${this._data}>
        <div class="container">
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">working day</th>
                <th scope="col">duration</th>
                <th scope="col">ticket</th>
                <th scope="col">description</th>
              </tr>
            </thead>
            <tbody>
              ${this._records.map(
                (record, index) => html`
                  <tr>
                    <th scope="row">${index}</th>
                    <td>
                      <t11-attr-local-date
                        .container=${record}
                        .attrDef=${{
                          key: "workingDay",
                          noLabel: true,
                        }}
                      ></t11-attr-local-date>
                    </td>
                    <td>
                      <t11-attr-bigdecimal
                        .container=${record}
                        .attrDef=${{
                          key: "duration",
                          noLabel: true,
                        }}
                      ></t11-attr-bigdecimal>
                    </td>
                    <td>
                      <t11-attr-text
                        .container=${record}
                        .attrDef=${{
                          key: "ticketNumber",
                          noLabel: true,
                        }}
                      ></t11-attr-text>
                    </td>
                    <td>
                      <t11-attr-text
                        .container=${record}
                        .attrDef=${{
                          key: "description",
                          noLabel: true,
                        }}
                      ></t11-attr-text>
                    </td>
                  </tr>
                `
              )}
            </tbody>
          </table>
          <button class="btn btn-primary btn-sm" @click=${() => this._addRow()}>add row</button>
          <button class="btn btn-primary btn-sm" @click=${() => this._updateBackend()}>update</button>
        </div>
      </t11-context>
    `;
  }

  static register() {
    if (!customElements.get("t11-weekly-input")) {
      customElements.define("t11-weekly-input", WeeklyInputComponent);
    }
  }
}
WeeklyInputComponent.register();
