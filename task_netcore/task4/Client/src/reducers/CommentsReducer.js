import { LOAD_COMMENTS } from '../actions/types';

const InitialState = {
    comments: []
}

const commentsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        default:
            return state;
    }
}

export default (commentsReducer);