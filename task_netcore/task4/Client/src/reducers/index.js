import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import headerReducer from './HeaderReducer';
import authorizationReducer from './AuthorizationReducer';
import errorReducer from './ErrorReducer';
import commentFormReducer from './CommentFormReducer';
import errorRatingReducer from './ErrorRatingReducer'
import moviesReducer from './MoviesReducer';
import movieInfoReducer from './MovieInfoReducer';
import commentsReducer from './CommentsReducer';
import userRatingReducer from './UserRatingReducer';
import averageRatingReducer from './AverageRatingReducer';

const reducer = combineReducers({
    commentForm: commentFormReducer,
    comments: commentsReducer,
    isAuth: authorizationReducer,
    header: headerReducer,
    form: reduxFormReducer,
    errors: errorReducer,
    errorsRating: errorRatingReducer,
    movies: moviesReducer,
    movieInfo: movieInfoReducer,
    userRating: userRatingReducer,
    averageRating: averageRatingReducer  
});

export default reducer;