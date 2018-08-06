import { LOGIN_REDUX_FORM_SUCCESS } from '../actions/types';

const authorizationReducer = (state = false, action) => {
    switch (action.type) {
        case LOGIN_REDUX_FORM_SUCCESS:
            return true;
        default:
            return state;
    }
}

export default (authorizationReducer);