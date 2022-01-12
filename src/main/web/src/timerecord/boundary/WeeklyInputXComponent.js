import { html } from "../../web_modules/lit-html.js";

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

export default class WeeklyInputXComponent extends AbstractWebComponent {
  async init() {
    const mondayDateTxt = "2022-01-03"; // Monday
    const mondeyDate = new Date(mondayDateTxt);
    this.week = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(
        mondayDateTxt.substring(0, 8) + (mondeyDate.getDate() + i + 1)
      );
      this.week.push(day.toISOString().substring(0, 10));
    }
    console.log("week", this.week);

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
    this._records.push({ ticketNumber: null });
    this.refreshContext();
  }

  async _updateBackend() {
    await TimeRecordsService.updateAll(this._records);
    this._records = await this._loadTicketsByCurrentUser();
    this.refreshContext();
  }

  _renderTRDay(trDay) {
    const minColumns = 5;

    const recordWeek = {};

    let row = "";
    for (let i = 0; i < 7; i++) {
      row = html`${row}
        <td>
          <t11-attr-text
            .container=${recordWeek}
            .attrDef=${{
              key: `ticketNumber-${trDay}-${i}`,
              noLabel: true,
            }}
          ></t11-attr-text>
        </td>`;
    }
    return row;
  }

  renderComponent() {
    const minRows = 5;
    const rows = this.week.map(day => {day: []})
    return html`
      <t11-context .value=${this._data}>
        <div class="container">
          <hr />
          <h2>Weekly X</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Activity</th>
                ${this.week.map(
                  (trDay) => html` <th scope="col">${trDay}</th> `
                )}
              </tr>
            </thead>
            <tbody>
              ${this.week.map(
                (trDate) => html`
                  <tr>
                    <td>${trDate}</td>
                    ${this._renderTRDay(trDate)}
                  </tr>
                `
              )}
            </tbody>
          </table>
          <button class="btn btn-primary btn-sm" @click=${() => this._addRow()}>
            add row
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click=${() => this._updateBackend()}
          >
            update
          </button>
        </div>
      </t11-context>
    `;
  }

  static register() {
    if (!customElements.get("t11-weekly-input-x")) {
      customElements.define("t11-weekly-input-x", WeeklyInputXComponent);
    }
  }
}
WeeklyInputXComponent.register();
