export class SessionService {
    static getItem(type){
        return sessionStorage.getItem(type);
    };

    static setItem(type, value){
        return sessionStorage.setItem(type, value);
    };

    static removeItem(type){
        return sessionStorage.removeItem(type);
    }

    static hasItem(type){
        if (sessionStorage.getItem(type) === null){
            return false;
        }

        return true;
    }
}