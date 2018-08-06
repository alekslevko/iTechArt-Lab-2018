import { combineReducers } from 'redux';
import formReducer from './FormReducer';
import passwordReducer from './PasswordReducer';
import mailReducer from './MailReducer';
import authorizationReducer from './AuthorizationReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { LOGIN_CLEAR_STATE } from '../actions/types';

const reducer = combineReducers({
    formReducer: formReducer, password: passwordReducer, mail: mailReducer, authorizationReducer: authorizationReducer, form: reduxFormReducer.plugin ({
        login: (state, action) => {
            switch(action.type) {
                case LOGIN_CLEAR_STATE: 
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

export default reducer;