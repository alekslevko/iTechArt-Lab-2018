import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import PasswordReducer from './PasswordReducer';
import MailReducer from './MailReducer';

const reducer = combineReducers({form: FormReducer, password: PasswordReducer, mail: MailReducer  });

export default reducer;