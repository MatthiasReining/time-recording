import { Router } from "../../../node_modules/@vaadin/router/dist/vaadin-router.js";
//import { Router } from "/node_modules/@vaadin/router/dist/vaadin-router.js";
import HomeComponent from "../../home/boundary/HomeComponent.js";
import TimeRecordingInputComponent from "../../timerecord/boundary/TimeRecordInputComponent.js";
import WeeklyInputComponent from "../../timerecord/boundary/WeeklyInputComponent.js";

TimeRecordingInputComponent.register();
WeeklyInputComponent.register();
HomeComponent.register();

let router = null;

const routerOptions = {
  
}

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
