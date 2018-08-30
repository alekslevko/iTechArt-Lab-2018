import { REQUESTED_MOVIE_INFO, REQUESTED_MOVIE_INFO_FAILED, REQUESTED_MOVIE_INFO_SUCCEEDED } from '../actions/types';

const InitialState = {
    movieInfo: {
        photos: []
    },
    loading: false,
    error: false
}

const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_MOVIE_INFO:
            return {
                movieInfo: {
                    photos: []
                },
                loading: true,
                error: false
            };
        case REQUESTED_MOVIE_INFO_SUCCEEDED:
            return {
                movieInfo: action.movieInfo,
                loading: false,
                error: false
            };
        case REQUESTED_MOVIE_INFO_FAILED:
            return {
                movieInfo: {},
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default (movieReducer);