import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import headerReducer from './HeaderReducer';
import authorizationReducer from './AuthorizationReducer';
import errorAccountReducer from './ErrorAccountReducer';
import commentFormReducer from './CommentFormReducer';
import errorRatingReducer from './ErrorRatingReducer'
import moviesReducer from './MoviesReducer';
import movieInfoReducer from './MovieInfoReducer';
import commentsReducer from './CommentsReducer';
import userRatingReducer from './UserRatingReducer';
import averageRatingReducer from './AverageRatingReducer';
import movieSearchFormReducer from './MovieSearchFormReducer';
import movieSearchResultReducer from './MovieSearchResultReducer';
import errorMovieSearchReducer from './ErrorMovieSearchReducer';

const reducer = combineReducers({
    commentForm: commentFormReducer,
    comments: commentsReducer,
    isAuth: authorizationReducer,
    header: headerReducer,
    form: reduxFormReducer,
    errorsAccount: errorAccountReducer,
    errorsRating: errorRatingReducer,
    movies: moviesReducer,
    movieInfo: movieInfoReducer,
    userRating: userRatingReducer,
    averageRating: averageRatingReducer,
    movieSearchForm: movieSearchFormReducer,
    movieSearchResult: movieSearchResultReducer,
    errorMovieSearch: errorMovieSearchReducer
});

export default reducer;