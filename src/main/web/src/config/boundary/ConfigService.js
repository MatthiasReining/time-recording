const appConfig = {
  ui: {
    attributeStyle: "floating",
  },
};

export default class ConfigService {
  static getAttributeDefaultStyle() {
    return appConfig.ui.attributeStyle || '';
  }
}
