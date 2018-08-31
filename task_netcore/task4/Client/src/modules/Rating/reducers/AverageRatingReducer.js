import { REQUESTED_AVERAGE_RATING, REQUESTED_AVERAGE_RATING_FAILED, REQUESTED_AVERAGE_RATING_SUCCEEDED } from '../actions/types';

const InitialState = {
    averageRating: 0,
    isLoading: false,
    error: false
}

const averageRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_AVERAGE_RATING:
            return {
                averageRating: 0,
                isLoading: true,
                error: false
            };
        case REQUESTED_AVERAGE_RATING_SUCCEEDED:
            return {
                averageRating: action.averageRating,
                isLoading: false,
                error: false,
            };
        case REQUESTED_AVERAGE_RATING_FAILED:
            return {
                averageRating: 0,
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default (averageRatingReducer);