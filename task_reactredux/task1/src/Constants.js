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
    FieldIsRequired: 'Поле должно быть заполнено',
    EmailErrorMessage: 'Некорректно введена почта',
    PasswordErrorMessage: 'Пароль минимум 6 символов'
});

export const applicationRoutes = {
    aboutRoute: '/iTechArt-Lab-2018/about',
    countersRoute: '/iTechArt-Lab-2018/counters',
    loginRoute: '/iTechArt-Lab-2018/login',
    loginReduxRoute: '/iTechArt-Lab-2018/login-redux',
    loginReduxSuccessRoute: '/iTechArt-Lab-2018/login-redux/success',
    loginReduxFormRoute: '/iTechArt-Lab-2018/login-redux-form',
    loginReduxFormSuccessRoute: '/iTechArt-Lab-2018/login-redux-form/success',
    startPageRoute: '/iTechArt-Lab-2018/',
    notFoundRoute: '/iTechArt-Lab-2018/404',
    defaultRoute: '/',
    errorRoute: '/*'
};