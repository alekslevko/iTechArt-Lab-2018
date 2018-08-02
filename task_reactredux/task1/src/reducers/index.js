import { validateMail, validatePassword } from '../Validation';

const initialState = {
    mail: '',
    password: '',
    mailValid: false,
    passwordValid: false,
    wasSubmited: false
}

const LoginReduxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_MAIL_CHANGE':
            return {
                ...state,
                mail: action.mail
            }
        case 'ON_PASSWORD_CHANGE':
            return {
                ...state,
                password: action.password
            }
        case 'VALIDATE_MAIL':
            if (validateMail(action.mail)) {
                return {
                    ...state,
                    mailValid: true
                }
            }
            return {
                ...state,
                mailValid: false
            }
        case 'VALIDATE_PASSWORD':
            if (validatePassword(action.password)) {
                return {
                    ...state,
                    passwordValid: true
                }
            }
            return {
                ...state,
                passwordValid: false
            }
        case 'HANDLE_SUBMIT':
            return {
                ...state,
                wasSubmited: true
            }
        case 'RESET_FORM':
            return {
                ...state,
                ...initialState
            }
        default:
            return state    
    }
};

export default LoginReduxReducer;