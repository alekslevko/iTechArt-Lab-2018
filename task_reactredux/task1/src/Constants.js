const commandsEnum = Object.freeze({
    start: "start",
    add: "add",
    del: "delete",
    def: "default"
}); 

export default (commandsEnum);

export const MIN_PASSWORD_LENGTH = 5;

export const REG_EXPR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const errorMessagesEnum = Object.freeze({
    EmailErrorMessage: "Некорректно введена почта",
    PasswordErrorMessage: "Пароль минимум 6 символов"
});

