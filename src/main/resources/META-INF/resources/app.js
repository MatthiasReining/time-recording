class MainApp {
  constructor() {
    console.log("constructor");
  }

  static init() {
    new MainApp();
  }
}

window.onload = () => MainApp.init();
