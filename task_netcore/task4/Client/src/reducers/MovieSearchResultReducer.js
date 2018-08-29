import { LOAD_SEARCH_RESULT_MOVIES } from '../actions/types';

const InitialState = {
    movies: []
}

const movieSearchResultReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_SEARCH_RESULT_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
}

export default (movieSearchResultReducer);