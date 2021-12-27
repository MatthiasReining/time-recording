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
}
