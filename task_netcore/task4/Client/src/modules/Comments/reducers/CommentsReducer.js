import { REQUESTED_COMMENTS, REQUESTED_COMMENTS_FAILED, REQUESTED_COMMENTS_SUCCEEDED, NEW_COMMENT_RECEIVED } from '../actions/types';

const InitialState = {
    comments: [],
    loading: false,
    error: false
}

const commentsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_COMMENTS:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case REQUESTED_COMMENTS_SUCCEEDED:
            return {
                ...state,
                comments: [...action.comments],
                loading: false,
                error: false,
            };
        case REQUESTED_COMMENTS_FAILED:
            return {
                ...state,
                comments: [],
                loading: false,
                error: true,
            };
        case NEW_COMMENT_RECEIVED:
            return {
                ...state,
                comments: [...action.comments],
                loading: false,
                error: false,
            };
        default:
            return state;
    }
}

export default (commentsReducer);