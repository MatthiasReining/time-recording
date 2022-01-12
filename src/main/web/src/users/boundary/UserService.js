import RequestUtils from "../../base/RequestUtils.js";

export default class UserService {

    static async getCurrentUser() {
        return RequestUtils.fetchSecureAsync('./api/users/me');
    }
}