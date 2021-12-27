import { html } from "../../web_modules/lit-html.js";
import AttrText from "../../base/renderer/AttrText.js";
import UserService from "../../users/boundary/UserService.js";
import {
  AbstractWebComponent,
  ContextElement,
} from "../../web_modules/tech11-web-base.js";
import AttrLocaleDate from "../../base/renderer/AttrLocalDate.js";
import TimeRecordsService from "../../timerecord/boundary/TimeRecordsService.js";
import AttrBigDecimal from "../../base/renderer/AttrBigDecimal.js";

AttrText.register();
AttrLocaleDate.register();
AttrBigDecimal.register
ContextElement.register();

export default class TimeRecordingAppComponent extends AbstractWebComponent {
  async init() {
    this._user = await UserService.getCurrentUser();

    this._records = [];
    this._record = {
      description: null,
      workingDay: new Date().toISOString().substring(0, 10),
      duration: null,
      ticketNumber: null,
    };
    this._data = {};
  }

  _post() {
    this._record = TimeRecordsService.createOrUpdate(this._record);
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
              step: 0
            }}
          ></t11-attr-bigdecimal>
          <br>
          <button class="btn btn-primary" @click=${() => this._post()}>POST</button>

          <hr />
          ${JSON.stringify(this._record, 2, " ")}
        </div>
      </t11-context>
    `;
  }

  static register() {
    if (!customElements.get("t11-time-recording-app")) {
      customElements.define(
        "t11-time-recording-app",
        TimeRecordingAppComponent
      );
    }
  }
}
TimeRecordingAppComponent.register();
