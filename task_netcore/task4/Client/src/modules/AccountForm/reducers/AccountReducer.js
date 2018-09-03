import { REQUESTED_AUTHENTICATION, REQUESTED_AUTHENTICATION_FAILED, REQUESTED_AUTHENTICATION_SUCCEEDED, CLEAR_ERROR_MESSAGE } from '../actions/types';

const InitialState = {
    token: '',
    haveAccountErrors: false,
    errorMessage: ''
}

const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_AUTHENTICATION:
            return {
                ...InitialState
            };
        case REQUESTED_AUTHENTICATION_SUCCEEDED:
            return {
                token: action.token,
                haveAccountErrors: false,
                errorMessage: ''
            };
        case REQUESTED_AUTHENTICATION_FAILED:
            return {
                token: '',
                haveAccountErrors: true,
                errorMessage: action.errorMessage
            };
        case CLEAR_ERROR_MESSAGE: {
            return {
                haveAccountErrors: false,
                errorMessage: ''
            }
        }
        default:
            return state;
    }
}

export default (movieReducer);