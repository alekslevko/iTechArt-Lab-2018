import { HANDLE_SUBMIT } from '../actions/types';

const initialState = {
    wasSubmited: false
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SUBMIT:
            return {
                ...state,
                wasSubmited: true
            }
        default:
            return state;
    }
}

export default (formReducer);