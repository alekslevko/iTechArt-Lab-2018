import { REQUESTED_MOVIE_SEARCH, REQUESTED_MOVIE_SEARCH_FAILED, REQUESTED_MOVIE_SEARCH_SUCCEEDED, CLEAR_ERROR_MESSAGE } from '../actions/types';

const InitialState = {
    movies: [],
    loading: false,
    haveMovieSearchErrors: false,
    errorMessage: ''
}

const movieSearchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_MOVIE_SEARCH:
            return {
                movies: [],
                loading: true,
                haveMovieSearchErrors: false,
                errorMessage: ''
            };
        case REQUESTED_MOVIE_SEARCH_SUCCEEDED:
            return {
                movies: action.movies,
                loading: false,
                haveMovieSearchErrors: false,
            };
        case REQUESTED_MOVIE_SEARCH_FAILED:
            return {
                movies: [],
                loading: false,
                haveMovieSearchErrors: true,
                errorMessage: action.errorMessage
            };
        case CLEAR_ERROR_MESSAGE: {
            return {
                ...InitialState
            };
        }
        default:
            return state;
    }
}

export default (movieSearchReducer);