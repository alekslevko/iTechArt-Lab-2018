const commandsEnum = Object.freeze({
    start: "start",
    add: "add",
    del: "delete",
    def: "default"
}); 

export default (commandsEnum);

export const MIN_PASSWORD_LENGTH = 5;

export const REG_EXPR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formDefaultValues = {
    mail: '',
    password: '',
    mailValid: false,
    passwordValid: false
};

export const ERROR_MESSAGES = [
    "Некорректно введена почта",
    "Пароль минимум 6 символов"
];