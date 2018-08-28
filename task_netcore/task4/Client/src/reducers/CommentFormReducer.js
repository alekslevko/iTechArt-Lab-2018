import { CLEAR_COMMENT_FIELD, ON_COMMENT_CHANGE } from '../actions/types';

const InitialState = {
    message: ''
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
        default:
            return state;
    }
}

export default (commentFormReducer);