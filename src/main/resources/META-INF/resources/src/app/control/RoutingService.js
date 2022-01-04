import { Router } from "https://unpkg.com/@vaadin/router";
import HomeComponent from "../../home/boundary/HomeComponent.js";
import TimeRecordingInputComponent from "../../timerecord/boundary/TimeRecordInputComponent.js";
import WeeklyInputComponent from "../../timerecord/boundary/WeeklyInputComponent.js";

TimeRecordingInputComponent.register();
WeeklyInputComponent.register();
HomeComponent.register();

let router = null;

export default class RoutingService {
  static init(outlet) {
    router = new Router(outlet);
    RoutingService._initRouter();
  }

  static _initRouter() {
    router.setRoutes([
      { path: "/", component: "t11-home" },
      { path: "/input", component: "t11-time-recording-input" },
      { path: "/weekly", component: "t11-weekly-input" },
    ]);
  }
}
