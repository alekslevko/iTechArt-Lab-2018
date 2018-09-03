import { CLEAR_MOVIE_SEARCH_FIELD, ON_MOVIE_SEARCH_CHANGE } from '../actions/types';

const InitialState = {
    movie: ''
}

const movieSearchFormReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ON_MOVIE_SEARCH_CHANGE:
            return {
                ...state,
                movie: action.movie
            };
        case CLEAR_MOVIE_SEARCH_FIELD:
            return {
                ...InitialState
            };
        default:
            return state;
    }
}

export default (movieSearchFormReducer);