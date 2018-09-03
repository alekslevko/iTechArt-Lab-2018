import { REQUESTED_SEND_RATING_SUCCEEDED, REQUESTED_SEND_RATING, REQUESTED_SEND_RATING_FAILED, CLEAR_ERROR_MESSAGE } from '../actions/types';

const InitialState = {
    sended: false,
    haveRatingErrors: false,
    errorMessage: ''
}

const sendRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_SEND_RATING:
            return {
                ...InitialState
            };
        case REQUESTED_SEND_RATING_SUCCEEDED:
            return {
                sended: true,
                haveRatingErrors: false,
                errorMessage: ''
            };
        case REQUESTED_SEND_RATING_FAILED:
            return {
                sended: false,
                haveRatingErrors: true,
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

export default (sendRatingReducer);