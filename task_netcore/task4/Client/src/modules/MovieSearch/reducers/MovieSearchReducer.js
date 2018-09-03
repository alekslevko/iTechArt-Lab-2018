import { REQUESTED_MOVIE_SEARCH, REQUESTED_MOVIE_SEARCH_FAILED, REQUESTED_MOVIE_SEARCH_SUCCEEDED, CLEAR_ERROR_MESSAGE } from '../actions/types';

const InitialState = {
    movies: [],
    isLoading: false,
    haveMovieSearchErrors: false,
    errorMessage: ''
}

const movieSearchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_MOVIE_SEARCH:
            return {
                movies: [],
                isLoading: true,
                haveMovieSearchErrors: false,
                errorMessage: ''
            };
        case REQUESTED_MOVIE_SEARCH_SUCCEEDED:
            return {
                movies: action.movies,
                isLoading: false,
                haveMovieSearchErrors: false,
            };
        case REQUESTED_MOVIE_SEARCH_FAILED:
            return {
                movies: [],
                isLoading: false,
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