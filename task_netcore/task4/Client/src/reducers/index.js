import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import headerReducer from '../modules/Header/reducers/HeaderReducer';
import authorizationReducer from '../modules/Header/reducers/AuthorizationReducer';
import commentFormReducer from '../modules/Comments/reducers/CommentFormReducer';
import moviesReducer from '../modules/MoviesList/reducers/MovieReducer';
import movieInfoReducer from '../modules/MovieInfo/reducers/MovieInfoReducer';
import commentsReducer from '../modules/Comments/reducers/CommentsReducer';
import userRatingReducer from '../modules/Rating/reducers/UserRatingReducer';
import averageRatingReducer from '../modules/Rating/reducers/AverageRatingReducer';
import movieSearchFormReducer from '../modules/MovieSearch/reducers/MovieSearchFormReducer';
import movieSearchReducer from '../modules/MovieSearch/reducers/MovieSearchReducer';
import accountReducer from '../modules/AccountForm/reducers/AccountReducer';
import sendRatingReducer from '../modules/Rating/reducers/SendRatingReducer';

const reducer = combineReducers({
    commentForm: commentFormReducer,
    comments: commentsReducer,
    isAuth: authorizationReducer,
    header: headerReducer,
    form: reduxFormReducer,
    movies: moviesReducer,
    movieInfo: movieInfoReducer,
    userRating: userRatingReducer,
    averageRating: averageRatingReducer,
    movieSearchForm: movieSearchFormReducer,
    movieSearch: movieSearchReducer,
    account: accountReducer,
    sendRating: sendRatingReducer
});

export default reducer;