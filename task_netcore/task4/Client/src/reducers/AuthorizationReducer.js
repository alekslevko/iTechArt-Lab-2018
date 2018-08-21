import { IS_AUTH, LOG_OUT } from '../actions/types';

const InitialState = {
    isAuth: false
}

const authorizationReducer = (state = InitialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: true
            };
        case LOG_OUT:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
}

export default (authorizationReducer);