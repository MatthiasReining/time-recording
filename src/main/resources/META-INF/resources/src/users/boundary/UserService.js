export default class UserService {

    static async getCurrentUser() {
        return (await fetch('./api/users/me')).json();
    }
}