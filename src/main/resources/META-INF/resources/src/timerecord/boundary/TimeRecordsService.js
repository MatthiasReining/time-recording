export default class TimeRecordsService {
  static async createOrUpdate(timeRecord) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    const resp = await fetch("./api/tr", {
      method: "POST",
      headers,
      body: JSON.stringify(timeRecord),
    });
    return resp.json();
  }

  static async get(queryParams) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    const params = new URLSearchParams();
    Object.entries(queryParams, (k, v) => params.append(k, v));
    const urlQueryParam = params.toString();
    console.log(urlQueryParam);

    const resp = await fetch(`./api/tr?${urlQueryParam}`, { headers });
    return resp.json();
  }
}
