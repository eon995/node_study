export default class AuthService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }

    async signup(username, password, name, email, url) {
        const data = await this.http.fetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                name,
                url,
            }),
        });
        this.tokenStorage.saveToken(data.token);
        return data;
    }



}