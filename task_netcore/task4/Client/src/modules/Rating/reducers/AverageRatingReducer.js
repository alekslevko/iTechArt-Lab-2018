import { REQUESTED_AVERAGE_RATING, REQUESTED_AVERAGE_RATING_FAILED, REQUESTED_AVERAGE_RATING_SUCCEEDED } from '../actions/types';

const InitialState = {
    averageRating: 0,
    error: false
}

const averageRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_AVERAGE_RATING:
            return {
                ...InitialState
            };
        case REQUESTED_AVERAGE_RATING_SUCCEEDED:
            return {
                averageRating: action.averageRating,
                error: false,
            };
        case REQUESTED_AVERAGE_RATING_FAILED:
            return {
                averageRating: 0,
                error: true,
            };
        default:
            return state;
    }
}

export default (averageRatingReducer);