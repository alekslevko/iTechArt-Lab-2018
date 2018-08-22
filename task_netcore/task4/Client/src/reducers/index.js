import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import headerReducer from './HeaderReducer';
import authorizationReducer from './AuthorizationReducer';
import errorReducer from './ErrorReducer';

const reducer = combineReducers({
    isAuth: authorizationReducer,
    header: headerReducer,
    form: reduxFormReducer,
    errors: errorReducer    
});

export default reducer;