import { ON_MAIL_CHANGE_REDUX_FORM, ON_PASSWORD_CHANGE_REDUX_FORM } from '../actions/types';

const initialState = {
    mail: '',
    password: ''
};

const fieldChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MAIL_CHANGE_REDUX_FORM:
            return {
                ...state,
                mail: action.mail,
            }
        case  ON_PASSWORD_CHANGE_REDUX_FORM:
            return {
                ...state,
                password: action.password
            }    
        default:
            return state;
    }
}

export default (fieldChangeReducer);