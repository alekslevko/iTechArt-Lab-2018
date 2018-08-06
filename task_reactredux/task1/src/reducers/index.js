import { combineReducers } from 'redux';
import formReducer from './FormReducer';
import passwordReducer from './PasswordReducer';
import mailReducer from './MailReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({ formRed: formReducer, password: passwordReducer, mail: mailReducer, form: reduxFormReducer });

export default reducer;