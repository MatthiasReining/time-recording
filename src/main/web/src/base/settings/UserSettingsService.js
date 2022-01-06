import { MessageDispatcher } from '../../web_modules/tech11-web-base.js';
import StorageUtils from '../StorageUtils.js';
import updateI18n, { i18n } from '../Ti18nFormatter.js';

const LS_KEY = `clerk-ui#UserSettings`;

/**
 * Here user specific settings are managed and persitent via _localStorage_.
 */
export default class UserSettingsService {
    /**
     * Stores the new locale to the user settings. Furthermore trigger a rerendering of the page
     *
     * @param {String} newLocale - new locale
     */
    static async updateLocale(newLocale, showMessageKeys = false) {
        const settings = this._loadSettings();
        settings.locale = newLocale;
        this._saveSettings(settings);

        // XXX is this a good idea to call also language services (like i18n) within this service class?

        // FIXME manage currency in a proper way
        const tmpCurrency = 'EUR';

        if (!i18n) {
            // still not initialized, initilaize i18n with default value
            await updateI18n(newLocale, tmpCurrency, newLocale, showMessageKeys);
            return;
        }
        i18n.displayMsgKeys = showMessageKeys;
        await i18n
            .getI18Next()
            .changeLanguage(newLocale)
            .then(async () => {
                await i18n.changeMomentLocale(newLocale, tmpCurrency);
                MessageDispatcher.dispatch('app#reload', { newLocale });
            });
    }

    /**
     * Returns the current status of `showMessageKeys`. The status is set via `updateLocale`.
     * @returns {Boolean} `true` if message keys are shown.
     */
    static isShowMessageKeys() {
        return this._loadSettings().showMessageKeys;
    }

    /**
     * @returns {String} the current user locale;
     */
    static getLocale() {
        return this._loadSettings().locale;
    }

    static setNavBarStyle(newNavbarStyle) {
        const settings = this._loadSettings();
        settings.navbarStyle = newNavbarStyle;
        this._saveSettings(settings);
    }

    /**
     * @returns {String} the navbar style
     */
    static getNavBarStyle() {
        // default value _light_
        return this._loadSettings().navbarStyle || 'light';
    }

    static setBackgroundConfig(newBackgroundConfig = { blur, fade, show }) {
        const settings = this._loadSettings();
        settings.bgConfig = newBackgroundConfig;
        this._saveSettings(settings);
    }

    /**
     * @returns {Object} background config
     */
    static getBackgroundConfig() {
        return (
            this._loadSettings().bgConfig || {
                show: true,
                blur: false,
                fade: 120,
            }
        );
    }

    static _loadSettings() {
        let lsAppSettings = StorageUtils.fetch(LS_KEY);

        if (!lsAppSettings) {
            lsAppSettings = {};
            this._saveSettings(lsAppSettings);
        }
        return lsAppSettings;
    }

    /**
     * Save the settings to local storage and dispatch the change
     * with the message key `onUserSettingsChanged`.
     *
     * @param {Object} settings
     */
    static _saveSettings(settings) {
        StorageUtils.save(LS_KEY, settings);
        MessageDispatcher.dispatch('onUserSettingsChanged', settings);
    }
}
