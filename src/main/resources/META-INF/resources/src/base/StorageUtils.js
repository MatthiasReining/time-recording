//import authData from '../services/Auth.js';
//import { env } from './EnvironmentUtils.js';

/**
 * Use the `localStorage` for persiting data. There is a _storeId_ used that
 * will take care to clear the data in case of user / environment changed.
 */
export default class StorageUtils {
    static _getStoreId(key) {
        return `TMP_${key}`
        const user =
            authData && authData.loggedInUser && authData.loggedInUser.username ? authData.loggedInUser.username : '';
        return `${user}#${env.URL_GATEWAY}_${key}`;
    }

    static save(itemKey, itemValue) {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem(`${StorageUtils._getStoreId(itemKey)}`, JSON.stringify(itemValue));
        } else {
            console.warn('Local storage not supported');
        }
    }

    static fetch(itemKey) {
        if (typeof Storage !== 'undefined') {
            const storageData = localStorage.getItem(`${StorageUtils._getStoreId(itemKey)}`);
            if (storageData && storageData !== `undefined`) {
                return JSON.parse(storageData);
            }
            return null;
        }
        return null;
    }

    static clear(itemKey) {
        if (typeof Storage !== 'undefined') {
            localStorage.removeItem(StorageUtils._getStoreId(itemKey));
        }
    }
}
