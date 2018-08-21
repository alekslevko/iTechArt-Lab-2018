export const REG_EXPR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/;

export const MIN_USERNAME_LENGTH = 3;

export const errorMessagesEnum = Object.freeze({
    FieldIsRequired: 'Field is required',
    UserNameErrorMessage: 'Login should be longer than 3 symbols',
    PasswordErrorMessage: 'Password should be longer than 6 symbols, it should contains at least one number, one special character, one lowercase and uppercase Latin lettter ',
});

export const applicationRoutes = {
    registerReduxFormRoute: '/account/register',
    loginReduxFormRoute: '/account/login',
    moviesRoute: '/movies',
    movieInfoRoute: '/movies/:id',
    notFoundRoute: '/404',
    defaultRoute: '/',
    errorRoute: '/*'
};