import { HANDLE_HEADER_CLOSE, HANDLE_HEADER_MENU } from '../actions/types';

const InitialState = {
    anchorEl: null
}

const headerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case HANDLE_HEADER_MENU:
            return {
                ...state,
                anchorEl: action.anchorEl
            };
        case HANDLE_HEADER_CLOSE:
            return {
                ...state,
                anchorEl: null
            };
        default:
            return state;
    }
}

export default (headerReducer);