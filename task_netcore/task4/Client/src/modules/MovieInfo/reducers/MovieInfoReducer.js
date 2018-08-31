import { REQUESTED_MOVIE_INFO, REQUESTED_MOVIE_INFO_FAILED, REQUESTED_MOVIE_INFO_SUCCEEDED } from '../actions/types';

const InitialState = {
    movieInfo: {
        photos: []
    },
    isLoading: false,
    error: false
}

const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_MOVIE_INFO:
            return {
                movieInfo: {
                    photos: []
                },
                isLoading: true,
                error: false
            };
        case REQUESTED_MOVIE_INFO_SUCCEEDED:
            return {
                movieInfo: action.movieInfo,
                isLoading: false,
                error: false
            };
        case REQUESTED_MOVIE_INFO_FAILED:
            return {
                movieInfo: {},
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default (movieReducer);