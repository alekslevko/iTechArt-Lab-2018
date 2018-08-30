import {
    CLEAR_ERROR_MESSAGE, REQUESTED_AVERAGE_RATING, REQUESTED_AVERAGE_RATING_FAILED, REQUESTED_AVERAGE_RATING_SUCCEEDED,
    REQUESTED_USER_RATING, REQUESTED_USER_RATING_FAILED, REQUESTED_USER_RATING_SUCCEEDED, REQUESTED_SEND_RATING, REQUESTED_SEND_RATING_FAILED, REQUESTED_SEND_RATING_SUCCEEDED
} from './types';
import { webApiRoutes } from '../../../Constants';
import axios from 'axios';

export const clearErrorMessage = () => {
    return {
        type: CLEAR_ERROR_MESSAGE
    }
}

export const requestAverageRating = () => {
    return {
        type: REQUESTED_AVERAGE_RATING
    }
};

export const requestAverageRatingSuccess = (averageRating) => {
    return {
        type: REQUESTED_AVERAGE_RATING_SUCCEEDED,
        averageRating
    }
};

export const requestAverageRatingError = (errorMessage) => {
    return {
        type: REQUESTED_AVERAGE_RATING_FAILED,
        errorMessage
    }
};

export const axiosAverageRating = (dispatch, id) => {
    dispatch(requestAverageRating());

    return axios.get(webApiRoutes.loadAverageRatingRoute + id)
        .then(response => {
            dispatch(requestAverageRatingSuccess(response.data));
        })
        .catch(errors => {
            dispatch(requestAverageRatingError(errors.data));
        });
};

export const requestUserRating = () => {
    return {
        type: REQUESTED_USER_RATING
    }
};

export const requestUserRatingSuccess = (rating) => {
    return {
        type: REQUESTED_USER_RATING_SUCCEEDED,
        rating
    }
};

export const requestUserRatingError = (errorMessage) => {
    return {
        type: REQUESTED_USER_RATING_FAILED,
        errorMessage
    }
};

export const axiosUserRating = (dispatch, id) => {
    dispatch(requestAverageRating());

    return axios.get(webApiRoutes.loadUserRatingRoute + id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
        .then(response => {
            dispatch(requestUserRatingSuccess(response.data));
        })
        .catch(errors => {
            dispatch(requestAverageRatingError(errors.data));
        });
};

export const requestSendRating = () => {
    return {
        type: REQUESTED_SEND_RATING
    }
};

export const requestSendRatingSuccess = () => {
    return {
        type: REQUESTED_SEND_RATING_SUCCEEDED
    }
};

export const requestSendRatingError = (errorMessage) => {
    return {
        type: REQUESTED_SEND_RATING_FAILED,
        errorMessage
    }
};

export const axiosSendRating = (dispatch, sendRating, id) => {
    dispatch(requestSendRating());

    axios.post(webApiRoutes.addRatingRoute, sendRating, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
        .then(response => {
            axiosAverageRating(dispatch, id);
            axiosUserRating(dispatch, id);
        })
        .catch(errors => {
            dispatch(requestSendRatingError(errors.response.data));
        });
};