import { SHOW_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from '../actions/types';

const InitialState = {
    haveMovieErrors: false,
    errorMessage: ''
}

const errorMovieSearchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SHOW_ERROR_MESSAGE:
            return {
                ...state,
                haveMovieErrors: true,
                errorMessage: action.errorMessage
            };
        case CLEAR_ERROR_MESSAGE:
            return {
                ...InitialState
            };
        default:
            return state;
    }
}

export default (errorMovieSearchReducer);