import { validateMail } from '../Validation';
import { ON_MAIL_CHANGE } from '../Constants';

const initialState = {
    mail: '',
    mailValid: false
};

const MailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MAIL_CHANGE:
            return {
                ...state,
                mail: action.mail,
                mailValid: validateMail(action.mail)
            }
        default:
            return state;    
    }      
}

export default (MailReducer);