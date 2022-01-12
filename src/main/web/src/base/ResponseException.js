/**
 * See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
export default class ResponseException extends Error {
    constructor(resp, ...params) {
        // pass params to default error
        super(...params);

        this.name = ResponseException.name;

        // Behält den richtigen Stack-Trace für die Stelle bei, an der unser Fehler ausgelöst wurde (nur bei V8 verfügbar)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ResponseException);
        }

        // Benutzerdefinierte Debugging Informationen
        this._resp = resp;
        this.created = new Date();
    }

    getResponse() {
        return this._resp;
    }
}
