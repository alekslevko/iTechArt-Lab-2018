import { LOAD_AVERAGE_RATING } from '../actions/types';

const InitialState = {
    averageRating: 0
}

const averageRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_AVERAGE_RATING:
            return {
                ...state,
                averageRating: action.averageRating
            };
        default:
            return state;
    }
}

export default (averageRatingReducer);