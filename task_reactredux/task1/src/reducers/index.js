import { combineReducers } from 'redux';
import formReducer from './FormReducer';
import passwordReducer from './PasswordReducer';
import mailReducer from './MailReducer';

const reducer = combineReducers({form: formReducer, password: passwordReducer, mail: mailReducer  });

export default reducer;