export default class UserService {

    static async getCurrentUser() {
        const currentUser = await fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
    }
}