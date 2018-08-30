import { REQUESTED_COMMENTS, REQUESTED_COMMENTS_FAILED, REQUESTED_COMMENTS_SUCCEEDED } from '../actions/types';

const InitialState = {
    comments: [],
    loading: false,
    error: false
}

const commentsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_COMMENTS:
            return {
                comments: [],
                loading: true,
                error: false,
            };
        case REQUESTED_COMMENTS_SUCCEEDED:
            return {
                comments: action.comments,
                loading: false,
                error: false,
            };
        case REQUESTED_COMMENTS_FAILED:
            return {
                comments: [],
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default (commentsReducer);