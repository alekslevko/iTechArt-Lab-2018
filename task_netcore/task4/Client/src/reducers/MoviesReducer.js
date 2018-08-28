import { LOAD_MOVIES } from '../actions/types';

const InitialState = {
    movies: []
}

const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
}

export default (movieReducer);