export const REG_EXPR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/;

export const MIN_USERNAME_LENGTH = 3;

export const errorMessagesEnum = Object.freeze({
    FieldIsRequired: 'Field is required',
    UserNameErrorMessage: 'Login should be longer than 3 symbols',
    PasswordErrorMessage: 'Password should be longer than 6 symbols, it should contains at least one number, one special character, one lowercase and uppercase Latin lettter ',
});

export const applicationRoutes = {
    registerFormRoute: '/account/register',
    loginFormRoute: '/account/login',
    moviesRoute: '/movies',
    moviesSearchResultRoute: '/movie-results',
    movieInfoRoute: '/movies/:id',
    notFoundRoute: '/404',
    defaultRoute: '/',
    errorRoute: '/*'
};

const domainName = 'http://localhost:49448';

export const webApiRoutes = {
    loadMoviesRoute: domainName + '/movie/getmovies',
    loadMovieInfoRoute: domainName + '/movie/getmovie/',
    registerRoute: domainName + '/account/register',
    loginRoute: domainName + '/account/login',
    loadCommentsRoute: domainName + '/comment/getcomments/',
    addCommentRoute: domainName + '/comment/addcomment',
    addRatingRoute: domainName + '/rating/addrating',
    loadAverageRatingRoute: domainName + '/rating/getaveragerating/',
    loadUserRatingRoute: domainName + '/rating/getuserrating/',
    searchMoviesRoute: domainName + '/movie/getmoviesbyname/'
}