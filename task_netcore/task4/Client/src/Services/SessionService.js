export class SessionService {
    static getItem(type) {
        return sessionStorage.getItem(type);
    };

    static setItem(type, value) {
        sessionStorage.setItem(type, value);
    };

    static removeItem(type) {
        return sessionStorage.removeItem(type);
    }

    static hasItem(type) {
        return !!sessionStorage.getItem(type);
    }

    static setJsonItem(type, value) {
        sessionStorage.setItem(type, JSON.stringify(value));
    };

    static getJsonItem(type) {
        return JSON.parse(sessionStorage.getItem(type));
    };
}