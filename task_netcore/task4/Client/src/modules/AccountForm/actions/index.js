import { SHOW_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, REQUESTED_AUTHENTICATION, REQUESTED_AUTHENTICATION_FAILED , REQUESTED_AUTHENTICATION_SUCCEEDED } from './types';
import { webApiRoutes } from '../../../Constants';
import axios from 'axios';
import { SessionService } from '../../../Services/SessionService';

export const showErrorMessage = (errorMessage) => {
    return {
        type: SHOW_ERROR_MESSAGE,
        errorMessage
    }
}

export const clearErrorMessage = () => {
    return {
        type: CLEAR_ERROR_MESSAGE
    }
}

export const requestAuthentication = () => {
    return {
      type: REQUESTED_AUTHENTICATION
    }
  };
  
  export const requestAuthenticationSuccess = (token, user) => {
    return {
      type: REQUESTED_AUTHENTICATION_SUCCEEDED,
      token,
      user
    }
  };
  
  export const requestAuthenticationError = (errorMessage) => {
    return {
      type: REQUESTED_AUTHENTICATION_FAILED,
      errorMessage
    }
  };
  
  export const axiosLogin = (dispatch, user) => {
    dispatch(requestAuthentication());

    return axios.post(webApiRoutes.loginRoute, user)
      .then(response => {
        dispatch(requestAuthenticationSuccess(
          SessionService.setItem('token', response.data),
          SessionService.setItem('user', user.userName)));
      })
      .catch(errors => {
        dispatch(requestAuthenticationError(errors.response.data));
      })
  };

  export const axiosRegister = (dispatch, user) => {
    dispatch(requestAuthentication());

    return axios.post(webApiRoutes.registerRoute, user)
      .then(response => {
        dispatch(requestAuthenticationSuccess(
          SessionService.setItem('token', response.data),
          SessionService.setItem('token', response.data),
          SessionService.setItem('user', user.userName)));
      })
      .catch(errors => {
        dispatch(requestAuthenticationError(errors.response.data));
      })
  };