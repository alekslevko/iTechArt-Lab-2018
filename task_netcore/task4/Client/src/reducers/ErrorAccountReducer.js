import { SHOW_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from '../actions/types';

const InitialState = {
    haveAccountErrors: false,
    errorMessage: ''
}

const errorAccountReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SHOW_ERROR_MESSAGE:
            return {
                ...state,
                haveAccountErrors: true,
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

export default (errorAccountReducer);