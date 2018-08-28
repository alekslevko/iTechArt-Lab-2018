import { LOAD_USER_RATING } from '../actions/types';

const InitialState = {
    rating: {
        alreadyRated: false
    }
}

const userRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_USER_RATING:
            return {
                ...state,
                rating: action.rating
            };
        default:
            return state;
    }
}

export default (userRatingReducer);