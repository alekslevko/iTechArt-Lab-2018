import { REQUESTED_MOVIES, REQUESTED_MOVIES_SUCCEEDED, REQUESTED_MOVIES_FAILED } from '../actions/types';

const InitialState = {
    movies: [],
    isLoading: false,
    error: false
}

const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_MOVIES:
            return {
                movies: [],
                isLoading: true,
                error: false,
            };
        case REQUESTED_MOVIES_SUCCEEDED:
            return {
                movies: action.movies,
                isLoading: false,
                error: false,
            };
        case REQUESTED_MOVIES_FAILED:
            return {
                movies: [],
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default (movieReducer);