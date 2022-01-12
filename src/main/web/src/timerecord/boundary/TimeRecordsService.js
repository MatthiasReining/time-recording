import RequestUtils from "../../base/RequestUtils.js";

const headers = new Headers();
headers.set("Content-Type", "application/json");
headers.set("Accept", "application/json");

export default class TimeRecordsService {
  static async createOrUpdate(timeRecord) {
    return RequestUtils.fetchSecureAsync("./api/tr", {
      method: "POST",
      body: JSON.stringify(timeRecord),
    });
  }

  static async updateAll(timeRecords) {
    const resp = await RequestUtils.fetchSecureAsync(
      "./api/tr/btx/batch-update",
      {
        method: "POST",
        body: JSON.stringify(timeRecords),
      }
    );
    // FIXME verify response;
  }

  static async get(queryParams) {
    const params = new URLSearchParams();
    Object.entries(queryParams, (k, v) => params.append(k, v));
    const urlQueryParam = params.toString();
    console.log('urlQueryParam', urlQueryParam);

    return RequestUtils.fetchSecureAsync(`./api/tr?${urlQueryParam}`);
  }
}
