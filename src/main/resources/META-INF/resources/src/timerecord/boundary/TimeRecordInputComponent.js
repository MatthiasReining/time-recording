import { html } from "../../web_modules/lit-html.js";
import AttrText from "../../base/renderer/AttrText.js";
import UserService from "../../users/boundary/UserService.js";
import {
  AbstractWebComponent,
  ContextElement,
} from "../../web_modules/tech11-web-base.js";
import AttrLocalDate from "../../base/renderer/AttrLocalDate.js";
import TimeRecordsService from "../../timerecord/boundary/TimeRecordsService.js";
import AttrBigDecimal from "../../base/renderer/AttrBigDecimal.js";

AttrText.register();
AttrLocalDate.register();
AttrBigDecimal.register;
ContextElement.register();

export default class TimeRecordingInputComponent extends AbstractWebComponent {
  async init() {
    this._user = await UserService.getCurrentUser();

    this._records = await this._loadTicketsByCurrentUser();

    this._record = {
      description: null,
      workingDay: new Date().toISOString().substring(0, 10),
      duration: null,
      ticketNumber: null,
    };
    this._data = {};
  }

  async _loadTicketsByCurrentUser() {
    return TimeRecordsService.get({
      userName: this._user.userName,
    });
  }

  async _post() {
    this._record = await TimeRecordsService.createOrUpdate(this._record);
    this._records = await this._loadTicketsByCurrentUser();
    this.refreshContext();
  }

  renderComponent() {
    return html`
      <t11-context .value=${this._data}>
        <div class="container">
          <h1>hello hello ${this._user.userName}</h1>
          <hr />
          <t11-attr-locale-date
            .container=${this._record}
            .attrDef=${{
              key: "workingDay",
              label: "WORKING_DAY",
            }}
          ></t11-attr-locale-date>
          <t11-attr-text
            .container=${this._record}
            .attrDef=${{
              key: "ticketNumber",
              label: "TICKET_NUMBER",
            }}
          ></t11-attr-text>
          <t11-attr-text
            .container=${this._record}
            .attrDef=${{
              key: "description",
              label: "DESCRIPTION",
            }}
          ></t11-attr-text>
          <t11-attr-bigdecimal
            .container=${this._record}
            .attrDef=${{
              key: "duration",
              label: "DURATION",
              step: 0,
            }}
          ></t11-attr-bigdecimal>
          <br />
          <button class="btn btn-primary" @click=${() => this._post()}>
            POST
          </button>

          <hr />
          ${JSON.stringify(this._record, 2, " ")}
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
                (record) => html`
                  <tr>
                    <th scope="row">1</th>
                    <td>${record.workingDay}</td>
                    <td>${record.duration}</td>
                    <td>${record.ticketNumber}</td>
                    <td>${record.description}</td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </t11-context>
    `;
  }

  static register() {
    if (!customElements.get("t11-time-recording-input")) {
      customElements.define(
        "t11-time-recording-input",
        TimeRecordingInputComponent
      );
    }
  }
}
TimeRecordingInputComponent.register();
