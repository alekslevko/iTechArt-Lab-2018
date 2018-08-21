import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import headerReducer from './HeaderReducer';
import authorizationReducer from './AuthorizationReducer';
import userReducer from './UserReducer';

const reducer = combineReducers({
    isAuth: authorizationReducer,
    header: headerReducer,
    form: reduxFormReducer,
    user: userReducer
});

export default reducer;