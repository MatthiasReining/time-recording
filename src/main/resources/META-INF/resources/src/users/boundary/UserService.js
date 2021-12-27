export default class UserService {

    static async getCurrentUser() {
        const response = await fetch('./api/users/me');
        return response.json();
    }
}