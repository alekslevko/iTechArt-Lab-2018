import { REQUESTED_AVERAGE_RATING, REQUESTED_AVERAGE_RATING_FAILED, REQUESTED_AVERAGE_RATING_SUCCEEDED } from '../actions/types';

const InitialState = {
    averageRating: 0,
    loading: false,
    error: false
}

const averageRatingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REQUESTED_AVERAGE_RATING:
            return {
                averageRating: 0,
                loading: true,
                error: false
            };
        case REQUESTED_AVERAGE_RATING_SUCCEEDED:
            return {
                averageRating: action.averageRating,
                loading: false,
                error: false,
            };
        case REQUESTED_AVERAGE_RATING_FAILED:
            return {
                averageRating: 0,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default (averageRatingReducer);