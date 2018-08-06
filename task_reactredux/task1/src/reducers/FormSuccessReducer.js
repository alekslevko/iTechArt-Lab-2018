import { LOGIN_REDUX_FORM_SUCCESS } from '../actions/types';

const initialState = {
    IsAutorized: false
};

const formSuccess = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REDUX_FORM_SUCCESS:
            return {
                ...state,
                IsAutorized: true
            }
        default:
            return state;
    }
}

export default (formSuccess);