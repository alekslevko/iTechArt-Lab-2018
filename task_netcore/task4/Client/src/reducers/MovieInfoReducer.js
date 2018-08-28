import { LOAD_MOVIE_INFO } from '../actions/types';

const InitialState = {
    movieInfo: {
        photos: []
    }
}

const movieInfoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_MOVIE_INFO:
            return {
                ...state,
                movieInfo: action.movieInfo
            };
        default:
            return state;
    }
}

export default (movieInfoReducer);