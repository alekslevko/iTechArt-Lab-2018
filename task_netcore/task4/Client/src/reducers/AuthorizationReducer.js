import { IS_AUTH, LOG_OUT } from '../actions/types';

const InitialState = {
    isAuth: Boolean(sessionStorage.getItem('token'))
}

const authorizationReducer = (state = InitialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: Boolean(sessionStorage.getItem('token'))
            };
        case LOG_OUT:
            return {
                ...state,
                isAuth: Boolean(sessionStorage.getItem('token'))
            };
        default:
            return state;
    }
}

export default (authorizationReducer);