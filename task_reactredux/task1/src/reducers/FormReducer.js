import { HANDLE_SUBMIT } from '../Constants';

const initialState = {
    wasSubmited: false
};

const FormReducer = (state = initialState, action) => {
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

export default (FormReducer);