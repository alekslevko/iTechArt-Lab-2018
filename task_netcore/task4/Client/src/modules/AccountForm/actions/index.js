import { SHOW_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, REQUESTED_AUTHENTICATION, REQUESTED_AUTHENTICATION_FAILED, REQUESTED_AUTHENTICATION_SUCCEEDED } from './types';
import { webApiRoutes } from '../../../Constants';
import axios from 'axios';
import { isAuth } from '../../Header/actions/index';
import { SessionService } from '../../../Services/SessionService';
import { applicationRoutes } from '../../../Constants';

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

export const requestAuthenticationSuccess = (account) => {
  return {
    type: REQUESTED_AUTHENTICATION_SUCCEEDED,
    account
  }
};

export const requestAuthenticationError = (errorMessage) => {
  return {
    type: REQUESTED_AUTHENTICATION_FAILED,
    errorMessage
  }
};

export const login = (dispatch, user, history) => {
  dispatch(requestAuthentication());

  return axios.post(webApiRoutes.loginRoute, user)
    .then(response => {
      dispatch(requestAuthenticationSuccess(
        SessionService.setJsonItem('account', {
          token: response.data.token,
          userName: response.data.userName
        })));
      dispatch(isAuth());
      history.push(
        applicationRoutes.moviesRoute);
    })
    .catch(errors => {
      dispatch(requestAuthenticationError(errors.response.data));
    })
};

export const register = (dispatch, user, history) => {
  dispatch(requestAuthentication());

  return axios.post(webApiRoutes.registerRoute, user)
    .then(response => {
      dispatch(requestAuthenticationSuccess(
        SessionService.setJsonItem('account', {
          token: response.data.token,
          userName: response.data.userName
        })));
      dispatch(isAuth());
      history.push(
        applicationRoutes.moviesRoute);
    })
    .catch(errors => {
      dispatch(requestAuthenticationError(errors.response.data));
    })
};