import { HEADER_HANDLE_MENU, HEADER_HANDLE_CLOSE } from '../actions/types';

const InitialState = {
    anchorEl: null
}

const headerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case HEADER_HANDLE_MENU:
            return {
                ...state,
                anchorEl: action.anchorEl
            };
        case HEADER_HANDLE_CLOSE:
        return {
            ...state,
            anchorEl: null
        };
        default:
            return state;
    }
}

export default (headerReducer);