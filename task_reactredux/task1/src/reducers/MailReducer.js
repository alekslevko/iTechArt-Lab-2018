import { validateMail } from '../Validation';
import { ON_MAIL_CHANGE, SAVE_MAIL_FROM_FORM } from '../actions/types';

const initialState = {
    mail: '',
    mailValid: false
};

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MAIL_CHANGE:
            return {
                ...state,
                mail: action.mail,
                mailValid: validateMail(action.mail)
            }
        case SAVE_MAIL_FROM_FORM:
            return {
                ...state,
                mail: action.mail,
                mailValid: true
            }
        default:
            return state;
    }
}

export default (mailReducer);