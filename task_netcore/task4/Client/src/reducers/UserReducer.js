import { SAVE_USERNAME_FROM_FORM } from '../actions/types';

const initialState = {
    userName: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USERNAME_FROM_FORM:
            return {
                ...state,
                userName: action.userName,
            }
        default:
            return state;
    }
}

export default (userReducer);