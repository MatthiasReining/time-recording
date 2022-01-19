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
import DebugDataComponent from "../../base/tools/DebugDataComponent.js";


AttrText.register();
AttrLocalDate.register();
AttrBigDecimal.register;
ContextElement.register();

/**
 * TimeRecord entity.
 * @typedef {Object} TimeRecord
 * @property {Number} id - technical id.
 * @property {String} workingDay - date in format yyyy-DD-mm
 * @property {String} ownerName
 * @property {Number} duration
 * @property {String} startActivity - start time of this actitity (ZonedDateTime)
 * @property {String} endActivity - end time of this actitity (ZonedDateTime)
 * @property {String} ticketNumber
 * @property {String} description
 * @property {String} status
 * @property {String} createdByName
 */
export default class WeeklyInputXComponent extends AbstractWebComponent {
  async init() {
    const mondayDateTxt = "2022-01-03"; // Monday
    const mondeyDate = new Date(mondayDateTxt);
    /**
     * activity days
     * @type {TimeRecord[]}
     */
    this._timeRecords = [];

    // prettier-ignore
    { // block just for formatting
    this._timeRecords.push({workingDay: '2022-01-03', ticketNumber: 'IPBIZ-123', duration: 1, description: 'blub'});
    this._timeRecords.push({workingDay: '2022-01-03',  ticketNumber: 'IPBIZ-631', duration: 5, description: 'heavy work'});
    this._timeRecords.push({workingDay: '2022-01-04',  ticketNumber: 'IPBIZ-123', duration: 3, description: 'blub'});
    }

    this._workWeek = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(
        mondayDateTxt.substring(0, 8) + (mondeyDate.getDate() + i + 1)
      );
      const dayTxt = day.toISOString().substring(0, 10);
      this._workWeek.push(dayTxt);
    }

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
    this._timeRecords.push({ ticketNumber: null });
    this.refreshContext();
  }

  async _updateBackend() {
    await TimeRecordsService.updateAll(this._records);
    this._records = await this._loadTicketsByCurrentUser();
    this.refreshContext();
  }

  /**
   * Transform time records to a map by ticket number.
   * @returns {Object.<String, TimeRecord>} time records by ticket numbers.
   */
  _getTimeRecordsByTickets() {
    const tickets = {};
    this._timeRecords.forEach((tr) => {
      if (!tickets[tr.ticketNumber]) tickets[tr.ticketNumber] = [];
      tickets[tr.ticketNumber].push(tr);
    });
    return tickets;
  }

  _getTotalHoursByWorkingDate(workingDay) {
    return this._timeRecords
      .filter((tr) => tr.workingDay === workingDay)
      .map((tr) => tr.duration || 0)
      .reduce((t1, t2) => t1 + t2, 0);
  }

  _renderTicketWorkingDayCell(workingDay, timeRecords, dayCount) {
    if (!timeRecords) return "";

    const ticketNumber = timeRecords[0].ticketNumber;
    let timeRecord = timeRecords.find((tr) => tr.workingDay === workingDay);
    if (!timeRecord) {
      // create record for this working day
      timeRecord = { ticketNumber, workingDay };
      this._timeRecords.push(timeRecord);
    }

    return html`
      <td class="t11-col-day${dayCount}">
        <t11-attr-bigdecimal
          .container=${timeRecord}
          .attrDef=${{
            key: "duration",
            label: "duration",
          }}
        ></t11-attr-bigdecimal>
      </td>
    `;
  }

  _updateTicketRow(e, virtualBracketTicket) {
    let { ticketNumber } = virtualBracketTicket;
    if (e.detail.key === "ticketNumber") {
      ticketNumber = e.detail.oldValue;
    }

    // FIXME must be a full match; otherwise tickets will be overwritten
    this._timeRecords
      .filter((tr) => tr.ticketNumber === ticketNumber)
      .forEach((tr) => {
        Object.assign(tr, virtualBracketTicket);
      });
  }

  /**
   * All time records belongs to the same ticket!
   * @param {TimeRecord[]} tickets
   */
  _renderTicketRow(timeRecords) {
    if (!timeRecords) return "";
    const ticketNumber = timeRecords[0].ticketNumber;
    const description = timeRecords[0].description;

    const virtualBracketTicket = { ticketNumber, description };

    return html`<tr>
      <td
        @valueChanged=${(e) => this._updateTicketRow(e, virtualBracketTicket)}
      >
        <div class="row g-2">
          <div class="col-md-6">
            <t11-attr-text
              .container=${virtualBracketTicket}
              .attrDef=${{
                key: "ticketNumber",
                label: "Ticket Number",
                cssInputAdditionalClasses: "t11-inputTicketNumber",
              }}
            ></t11-attr-text>
          </div>
          <div class="col-md">
            <t11-attr-text
              .container=${virtualBracketTicket}
              .attrDef=${{
                key: "description",
                label: "Description",
              }}
            ></t11-attr-text>
          </div>
        </div>
      </td>
      ${this._workWeek.map((workingDay, i) =>
        this._renderTicketWorkingDayCell(workingDay, timeRecords, i)
      )}
    </tr> `;
  }

  _renderTicketRows() {
    const tickets = Object.values(this._getTimeRecordsByTickets());
    return tickets.map((ticket) => this._renderTicketRow(ticket));
  }

  renderComponent() {
    const minRows = 5;
    const rows = this._timeRecords.map((day) => {
      day: [];
    });
    return html`
      <t11-context .value=${this._data}>
        <div class="m-5">
          <hr />
          <h2>Weekly X</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Activity</th>
                ${this._workWeek.map(
                  (date, i) =>
                    html`
                      <th scope="col" class="t11-col-day${i}">
                        ${date} (${this._getTotalHoursByWorkingDate(date)}h)
                      </th>
                    `
                )}
              </tr>
            </thead>
            <tbody>
              ${this._renderTicketRows()}
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
        <t11-debug-data .debugModel=${this._timeRecords}></t11-debug-data>
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
