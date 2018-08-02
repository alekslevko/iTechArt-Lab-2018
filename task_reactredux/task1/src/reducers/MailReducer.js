import { validateMail } from '../Validation';
import initialState from '../Constants';

const MailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_MAIL_CHANGE':
            return {
                ...state,
                mail: action.mail
            }
        case 'VALIDATE_MAIL':
            return {
                ...state,
                mailValid: validateMail(action.mail)
            }
        default:
            return state;    
    }      
}

export default (MailReducer);