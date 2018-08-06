import { combineReducers } from 'redux';
import formReducer from './FormReducer';
import passwordReducer from './PasswordReducer';
import mailReducer from './MailReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { LOGIN_SAVE_SUCCESS } from '../actions/types';

const reducer = combineReducers({
    formRed: formReducer, password: passwordReducer, mail: mailReducer, form: reduxFormReducer.plugin ({
        login: (state, action) => {
            switch(action.type) {
                case LOGIN_SAVE_SUCCESS: 
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

export default reducer;