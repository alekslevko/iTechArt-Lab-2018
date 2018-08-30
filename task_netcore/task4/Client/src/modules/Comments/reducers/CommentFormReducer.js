import { CLEAR_COMMENT_FIELD, ON_COMMENT_CHANGE, REQUESTED_SEND_COMMENT_SUCCEEDED } from '../actions/types';

const InitialState = {
    message: '',
    sended: false
}

const commentFormReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ON_COMMENT_CHANGE:
            return {
                ...state,
                message: action.message
            };
        case CLEAR_COMMENT_FIELD:
            return {
                ...InitialState
            };
        case REQUESTED_SEND_COMMENT_SUCCEEDED:
            return {
                sended: true
            };
        default:
            return state;
    }
}

export default (commentFormReducer);