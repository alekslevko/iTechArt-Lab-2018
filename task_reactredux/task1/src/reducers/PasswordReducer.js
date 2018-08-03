import { validatePassword } from '../Validation';
import { ON_PASSWORD_CHANGE } from '../actions/types';

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
        default:
            return state;
    }
}

export default (passwordReducer);