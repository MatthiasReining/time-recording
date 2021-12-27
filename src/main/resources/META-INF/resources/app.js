import { html, render } from "./src/web_modules/lit-html.js";
import TimeRecordingAppComponent from "./src/app/boundary/TimeRecordingAppComponent.js";
import updateI18n from "./src/base/Ti18nFormatter.js";
TimeRecordingAppComponent.register();

class MainApp {
  constructor() {
    console.log("constructor");
    this.init();
  }

  async init() {
    await updateI18n("en-US", "eur", "en-US");
    this.renderComponent();
  }

  renderComponent() {
    render(
      html` <t11-time-recording-app></t11-time-recording-app> `,
      document.body
    );
  }

  static bootstrap() {
    new MainApp();
  }
}

window.onload = () => MainApp.bootstrap();
