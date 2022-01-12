import RequestUtils from "../src/base/RequestUtils.js";

export default class MockApp {
  static init() {


    // user alice
    const userMe = { userName: "Alice" };
    RequestUtils.addMock("./api/users/me", null, 200, userMe);

    // time records
    RequestUtils.addMock('./api/tr', null, 200, []);
    RequestUtils.addMock('./api/tr?', null, 200, []);
  }
}
