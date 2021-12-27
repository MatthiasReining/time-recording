import UserService from "./src/users/boundary/UserService.js";

class MainApp {
  constructor() {
    console.log("constructor");
    this.init();
  }

  async init() {
    console.log('MainApp', await UserService.getCurrentUser());
  }

  static bootstrap() {
    new MainApp();
  }
}

window.onload = () => MainApp.bootstrap();
