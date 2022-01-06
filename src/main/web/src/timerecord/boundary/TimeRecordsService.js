const headers = new Headers();
headers.set("Content-Type", "application/json");
headers.set("Accept", "application/json");

export default class TimeRecordsService {
  static async createOrUpdate(timeRecord) {
    const resp = await fetch("./api/tr", {
      method: "POST",
      headers,
      body: JSON.stringify(timeRecord),
    });
    return resp.json();
  }

  static async updateAll(timeRecords) {
    const resp = await fetch("./api/tr/btx/batch-update", {
      method: "POST",
      headers,
      body: JSON.stringify(timeRecords),
    });
    // FIXME verify response;
  }

  static async get(queryParams) {
    const params = new URLSearchParams();
    Object.entries(queryParams, (k, v) => params.append(k, v));
    const urlQueryParam = params.toString();
    console.log(urlQueryParam);

    const resp = await fetch(`./api/tr?${urlQueryParam}`, { headers });
    return resp.json();
  }
}
