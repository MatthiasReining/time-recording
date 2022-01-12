import { Router } from "../../../node_modules/@vaadin/router/dist/vaadin-router.js";
//import { Router } from "/node_modules/@vaadin/router/dist/vaadin-router.js";
import HomeComponent from "../../home/boundary/HomeComponent.js";
import TimeRecordingInputComponent from "../../timerecord/boundary/TimeRecordInputComponent.js";
import WeeklyInputComponent from "../../timerecord/boundary/WeeklyInputComponent.js";
import WeeklyInputXComponent from "../../timerecord/boundary/WeeklyInputXComponent.js";
import WeeklyInputYComponent from "../../timerecord/boundary/WeeklyInputYComponent.js";

TimeRecordingInputComponent.register();
WeeklyInputComponent.register();
WeeklyInputYComponent.register();
WeeklyInputXComponent.register();
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
      { path: "/weekly-x", component: "t11-weekly-input-x" },
      { path: "/weekly-y", component: "t11-weekly-input-y" },
    ]);
  }
}
