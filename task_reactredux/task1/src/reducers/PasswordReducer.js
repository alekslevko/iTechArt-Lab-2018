import { validatePassword } from '../Validation';
import { ON_PASSWORD_CHANGE, SAVE_PASSWORD_FROM_FORM } from '../actions/types';

const initialState = {
    password: '',
    passwordValid: false
};

const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_PASSWORD_CHANGE:
            return {
                ...state,
                password: action.password,
                passwordValid: validatePassword(action.password)
            }
        case SAVE_PASSWORD_FROM_FORM:
            return {
                ...state,
                password: action.password,
                passwordValid: true
            }
        default:
            return state;
    }
}

export default (passwordReducer);