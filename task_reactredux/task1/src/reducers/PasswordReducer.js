import { validatePassword } from '../Validation';
import initialState from '../Constants';

const PasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_PASSWORD_CHANGE':
            return {
                ...state,
                password: action.password
            }
        case 'VALIDATE_PASSWORD':
            return {
                ...state,
                passwordValid: validatePassword(action.password)
            }
        default:
            return state;
    }
}

export default (PasswordReducer);