import i18next from '../web_modules/i18next.js';
import Backend from '../web_modules/i18nextHttpBackend.js';
import UserSettingsService from './settings/UserSettingsService.js';
// import dayjs, { duration, relativeTime, localeData, localizedFormat } from '../web_modules/dayjs.js';

// language imports
// import CacheManager from '../business/CacheManager.js';


/**
 * updateable via Ti18nFormatter#setRelativeContextPath
 */
let contextPath = window.location.pathname;
/*
// adds duration functions
dayjs.extend(duration);
// adds fromNow methods
dayjs.extend(relativeTime);
dayjs.extend(localeData);
// adds 'L LTS' formats
dayjs.extend(localizedFormat);
*/
// The backend is not working by importing it as native ES module. (see index.html)
// import Backend from '../web_modules/i18next-http-backend.js';

/**
 * The i18nFormatter takes care about the correct formatting based on a given locale.
 *
 * Why i18nFormatter?<br>
 * i18n - internationalization<br>
 * l10n - localization<br>
 * <br>
 * The i18nFormatter is part of the tech11 core/platform solution. Means it's a i18n
 * (<i>internationalization</i>) component that  allows you l10n (<i>localization</i>)
 * on the business components.<br>
 * <br>
 * @see https://www.w3.org/International/questions/qa-i18n
 */
export class Ti18nFormatter {
    constructor(locale, currency, languageSettings, displayMsgKeys = false) {
        this._locale = locale;
        [this._lang] = this._locale.split('-');
        this._fallbackLanguage = languageSettings.fallbackLanguage;
        this._messageBundle = {};
        this._fileIndex = [];
        this._loadedMsgFiles = new Set();
        this._l10nNF = new Intl.NumberFormat(locale);
        this._l10nCur = new Intl.NumberFormat(locale, { style: 'currency', currency });

        /**
         * `true` shows the _message key_ instead of the tranlate message from the message files.
         */
        this.displayMsgKeys = displayMsgKeys;

        // this._loadDayJsLocale(locale);
    }

    /**
     * Change the locale settings of the application
     *
     * @param {Object} localeData
     * @param {string} localeData.currentLocale - a locale string like `de`, `de-DE` or `en-US`
     * @param {String} currency - the curreny as string like 'EUR'
     */
    async changeLocale(localeData, currency) {
        this.getI18Next()
            .changeLanguage(localeData.currentLocale)
            .then(() => {
                this.changeMomentLocale(localeData.currentLocale, currency);
            });
        await this._loadDayJsLocale(localeData.currentLocale);
    }

    /**
     *
     * @param {String} locale - a locale string like `de`, `de-DE` or `en-US`
     */
    async _loadDayJsLocale(locale) {
        // dayjs is working with lower case;
        locale = locale.toLowerCase();

        let locales = CacheManager.getJSON('i18n', 'locales');
        if (!locales) {
            locales = await (await fetch(`.${contextPath}../web_modules/dayjs/locale.json`)).json();
            CacheManager.setJson(locales, 'i18n', 'locales');
        }

        const availbleLocale = locales.find((l) => l.key === locale);
        if (!availbleLocale) {
            locale = locale.substring(0, 2);
        }

        const dayJsLocalModule = await import(`${contextPath}web_modules/dayjs/locale/${locale}.js`);
        const dayJsLocal = dayJsLocalModule.default;

        dayjs.locale(locale, dayJsLocal);
    }

    static _getStoredUISettings() {
        JSON.parse(localStorage.getItem('clerkUiSettings'));
    }

    /**
     * Resolve the path for the message files based on the given namespace
     * @param {Array} lng array of langauges (['de-DE'])
     * @param {Array} ns aray of namespace (['custom'] or ['messages'])
     * @returns  {string} resolved path to the message file
     */
    static _i18nextPathResolver(lng, ns) {
        // XXX think about how to avoid hard coded context path ('business-workbench')
        if (ns && ns[0] === 'custom') {
            return `../..${contextPath}/ext/msgs/{{ns}}_{{lng}}.json`;
        }
        return `../..${contextPath}/msgs/{{ns}}_{{lng}}.json`;
    }

    /**
     * This is extracted in a dedicated method to have the chance to mock it for unit tests.
     * @returns the i18nextHttpBackend provider.
     */
    static getI18NextBackend() {
        // i18NextBackend is making problem by importing it as native ES module.
        // Therefore, linked globally on index.html
        return Backend;
    }

    static async _initI18Next() {
        const globalConfig = {
            localeConfig: {
                lng: UserSettingsService.getLocale() || 'de-DE',
                fallbackLng: 'de-DE',
            },
        };

        // const { host } = window.location;
        // const debug = host.includes('localhost') || host.includes('dev-03' || host.includes('dev-ui'));

        const i18nextOptions = {
            lng: 'en-US',
            load: 'currentOnly',
            // ns: ['custom', 'messages'],
            ns: ['messages'],
            // defaultNS: ['custom'],
            defaultNS: ['messages'],
            fallbackNS: ['messages'],
            supportedLngs: ['de-DE', 'de-AT', 'de', 'en-US', 'en'],
            nonExplicitSupportedLngs: false,
            cleanCode: true,
            backend: {
                loadPath: (lng, ns) => Ti18nFormatter._i18nextPathResolver(lng, ns),
            },
            interpolation: {
                // eslint-disable-next-line no-unused-vars
                format: (value, format, lng) => {
                    if (value) {
                        if (format === 'uppercase') return value.toUpperCase();
                        if (value instanceof Date || typeof value === 'string') return dayjs(value).format(format);
                    }
                    return value;
                },
            },
        };
        const { lng } = globalConfig.localeConfig;
        const { fallbackLng } = globalConfig.localeConfig;
        if (lng) {
            if (!i18nextOptions.supportedLngs.includes(lng)) i18nextOptions.supportedLngs.push(lng);
            i18nextOptions.lng = lng;
        }
        if (fallbackLng) i18nextOptions.fallbackLng = fallbackLng;

        if (Ti18nFormatter.getI18NextBackend()) await i18next.use(Ti18nFormatter.getI18NextBackend());
        // .use(i18nextBrowserLanguageDetector)

        await i18next.init(i18nextOptions, function (err, t) {});
    }

    /**
     * Format a date by using the given locale (locale is set in constructor).
     *
     * After there where some problems with Date regarding DST, we use in the background moment.js.
     * For more details, please see the comments inside the fucntion!
     *
     * @param {date|string} value a date object or a ISO-8601 date-representing string
     * @param {string} format optional, if format == 'dateTime' the date will be rendered with date and time.
     */
    df(value, format) {
        // XXX check if it's possible to throw away moment.js
        // PROBLEM
        // let value = new Date(1978-06-13T22:00:00.000Z); //German 14.06.1978 midnight
        // console.log('de-DE', value.toLocaleString('de-DE')); //--> 13.6.1978 23:00:00
        // when executed in november. Chrome has problems with DST (daylight saving time)... I don't know
        // nevertheless EDGE print the data correct as ‎14‎.‎06‎.‎1978‎ ‎00‎:‎00‎:‎00

        // therefore, for the moment, we go ahead with moment.js
        // Old comments
        /**
         * Implementation note:
         * At the momemnt, the Intl#DateFormater or Date#toLocaleDateString is used.
         * Thereby, the month is always rendered as 1 or 2 digit number. If there is a requirement for MMM or MMMM (date pattern),
         * have a look to parameter options Date#toLocaleString. You can use 'short' or 'long'. In this case you have to define a mapping between the date pattern and the options.
         * As implementation idea have a look to https://stackoverflow.com/questions/986657/how-do-i-format-a-javascript-date.
         * Furthermore you'll find the right date pattern here: https://github.com/unicode-cldr/cldr-dates-full/blob/master/main.
         */

        if (value === undefined) return '';
        const d = dayjs(value).locale(dayjs.locale());
        if (format === 'dateTime') return d.format('L LTS');
        if (format === 'dateTime2') return d.format('L LT');
        if (format) return d.format(format);
        return d.format('L');

        /*
    //NATIVE date implementation, replaced by moment.js for the moment...

    if (typeof value == "string")
      value = new Date(value); //convert date from iso8601 to date object
    //HACK: this is a hack because German format is not shown with leading '0' for date and month
    if (this._locale.startsWith('de')) {
      let dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Europe/Berlin' };
      console.log(value, value.toLocaleTimeString(this._locale, dateOptions));

      if (format == 'dateTime')
        return value.toLocaleTimeString(this._locale, dateOptions);
      return value.toLocaleDateString(this._locale, dateOptions);
    }
    if (format == 'dateTime')
      return value.toLocaleString(this._locale);
    return value.toLocaleDateString(this._locale);
    */
    }

    /**
     * Converts a local date (w/o timezon) to a UTC date based on the current locale of i18n class.
     *
     * @param {string} localDate - local date without tz informatoin
     * @returns iso8601 date (utc).
     */
    convertLocaleDateToUTCDate(localDate) {
        const m = dayjs(localDate);
        if (!m.isValid()) return undefined;
        return m.toISOString();
    }

    /**
     * Concerts a utc date to a local date.
     *
     * @param {string} utcDate - utc formatted date
     * @param {string} pattern - format pattern e.g. YYYY-MM-DD (see https://momentjs.com/docs/#/displaying/format/)
     * @returns local date formatted based on the pattern
     */
    convertUTCDateToLocalDate(utcDate, pattern) {
        const m = dayjs(utcDate);
        return m.format(pattern);
    }

    /**
     * Format a numeric value based on the current locale.
     * If it's a non numeric value the output is '-'.
     *
     * @param {numeric} value - the number that should be formatted
     * @param {numeric} fractionSize -  the decimal places
     * @return {string} formatted number
     */
    nf(value, fractionSize) {
        if (isNaN(value) || value === null || value === undefined) return '- ';
        if (fractionSize !== undefined) {
            return new Intl.NumberFormat(this._locale, {
                minimumFractionDigits: fractionSize,
                maximumFractionDigits: fractionSize,
            }).format(value);
        }
        return this._l10nNF.format(value);
    }

    cur(value, currencyCode) {
        if (isNaN(value) || value == undefined || value == null) return '- ';

        if (currencyCode == undefined) return this._l10nCur.format(value);
        let formatted;
        try {
            formatted = new Intl.NumberFormat(this._locale, { style: 'currency', currency: currencyCode }).format(
                value
            );
        } catch (error) {
            console.error(currencyCode, error);
            formatted = new Intl.NumberFormat(this._locale, { style: 'currency', currency: 'EUR' }).format(value);
        }

        return formatted;
    }

    /**
     * Returns the value or a default value if the given value is empty, null or undefined
     * @param {string} value - the value that should be printed
     * @param {string} defaultValue  - the default value. If undefined used <pre>-</pre>
     * @return {string} value of defaultValue, based on the content of value
     */
    txt(value, defaultValue) {
        if (value == undefined || value == null || value == '') return defaultValue == undefined ? '-' : defaultValue;
        return value;
    }

    /**
     * Returns the message identified by the given key.
     *
     * @param {string} key - the key of the message
     * @param {object} param - optional, if the message contains a ES6 string literal the data from param are used for it.
     *                        Too shorten the message, the param is abbreviated with p inside the message file.
     *                        For example: param = {policyNumber: '12345'} can be used in a the following message file:
     *                                     KEY: "Please use the policy number ${p.policyNumber}. Thanks"
     */
    msg(key, param) {
        if (this.displayMsgKeys) return key;
        const passInVariables = { p: param };
        return i18next.t(key, passInVariables);
    }

    duration(due) {
        dayjs.locale(this._locale);
        return dayjs.duration(dayjs().diff(due)).humanize();
    }

    formatDuration(timeInterval) {
        dayjs.locale(this._locale);
        return dayjs.duration(timeInterval).humanize();
    }

    diff(d1, d2 = new Date(), unit = 'minutes') {
        dayjs.locale(this._locale);
        const a = dayjs(d1);
        const b = dayjs(d2);
        return a.diff(b, unit); // 1
    }

    changeMomentLocale(locale, currency) {
        this._locale = locale;
        [this._lang] = this._locale.split('-');
        this._l10nNF = new Intl.NumberFormat(locale);
        this._l10nCur = new Intl.NumberFormat(locale, { style: 'currency', currency });
        this.appSettings = Ti18nFormatter._getStoredUISettings();
        // current language is imported and updated to dayjs objects
        this._loadDayJsLocale(locale);
    }

    /**
     *
     * @param {date} date1 - date2 for the duration date1 to date2
     * @param {data} date2 - date2 for the duration date1 to date2. If not present date2 is set to now.
     * @returns {Object} duration object
     * @returns {Date} duration.date1 - date1 of the duration
     * @returns {Date} duration.date2 -  date2 of the duration
     * @returns {number} duration.diff -  the difference in ms
     * @returns {string} duration.text-  a localized humanized message
     */
    durationData(date1, date2 = new Date()) {
        const result = { date1, date2 };
        dayjs.locale(this._locale);
        result.diff = dayjs(date1).diff(date2);
        const duration = dayjs.duration(result.diff);
        result.text = duration.humanize(true);
        return result;
    }

    getLocale() {
        return this._locale;
    }

    getI18Next() {
        return i18next;
    }

    static setRelativeContextPath(newContextPath) {
        contextPath = newContextPath;
    }
}

export let i18n;

export default async function updateI18n(currentLocale, currency, locale, displayMsgKeys) {
    i18n = new Ti18nFormatter(currentLocale, currency, locale, displayMsgKeys);
    await Ti18nFormatter._initI18Next();
}
