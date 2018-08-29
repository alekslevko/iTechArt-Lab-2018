import { IS_AUTH, LOG_OUT } from '../actions/types';
import { SessionService } from '../Services/SessionService';

const InitialState = {
    isAuth: SessionService.hasItem('token')
}

const authorizationReducer = (state = InitialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: SessionService.hasItem('token')
            };
        case LOG_OUT:
            return {
                ...state,
                isAuth: SessionService.hasItem('token')
            };
        default:
            return state;
    }
}

export default (authorizationReducer);