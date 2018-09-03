import { REQUESTED_USER_RATING, REQUESTED_USER_RATING_FAILED, REQUESTED_USER_RATING_SUCCEEDED } from '../actions/types';

const InitialState = {
    rating: {
        alreadyRated: false,
        value: 0        
    },
    error: false
}

const userRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_USER_RATING:
            return {
                ...InitialState
            };
        case REQUESTED_USER_RATING_SUCCEEDED:
            return {
                rating: action.rating,
                error: false,
            };
        case REQUESTED_USER_RATING_FAILED:
            return {
                rating: {
                    alreadyRated: false,
                    value: 0
                },
                error: true,
            };
        default:
            return state;
    }
}

export default (userRatingReducer);