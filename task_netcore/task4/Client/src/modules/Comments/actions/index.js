import { webApiRoutes } from '../../../Constants';
import axios from 'axios';
import {
  REQUESTED_SEND_COMMENT, REQUESTED_SEND_COMMENT_SUCCEEDED, REQUESTED_SEND_COMMENT_FAILED, CLEAR_COMMENT_FIELD, ON_COMMENT_CHANGE,
  REQUESTED_COMMENTS, REQUESTED_COMMENTS_FAILED, REQUESTED_COMMENTS_SUCCEEDED, NEW_COMMENT_RECEIVED
} from './types';
import { SessionService } from '../../../Services/SessionService';

export const clearCommentField = () => {
  return {
    type: CLEAR_COMMENT_FIELD
  }
}

export const onCommentChange = (message) => {
  return {
    type: ON_COMMENT_CHANGE,
    message
  }
}

export const requestSendComment = () => {
  return {
    type: REQUESTED_SEND_COMMENT
  }
};

export const requestSendCommentSuccess = () => {
  return {
    type: REQUESTED_SEND_COMMENT_SUCCEEDED
  }
};

export const requestSendCommentError = (errorMessage) => {
  return {
    type: REQUESTED_SEND_COMMENT_FAILED,
    errorMessage
  }
};

export const sendComment = (dispatch, comment, id) => {
  return axios.post(webApiRoutes.addCommentRoute, comment, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + SessionService.getJsonItem('account').token
    }
  })
    .then(response => {
      dispatch(requestSendCommentSuccess());
      dispatch(clearCommentField());  
    })
    .catch(errors => {
      dispatch(requestSendCommentError(errors.data));
    })
};

export const requestComments = () => {
  return {
    type: REQUESTED_COMMENTS
  }
};

export const requestCommentsSuccess = (comments) => {
  return {
    type: REQUESTED_COMMENTS_SUCCEEDED,
    comments
  }
};

export const requestCommentsError = (errorMessage) => {
  return {
    type: REQUESTED_COMMENTS_FAILED,
    errorMessage
  }
};

export const loadComments = (dispatch, id) => {
  dispatch(requestComments());

  return axios.get(webApiRoutes.loadCommentsRoute + id)
    .then(response => {
      dispatch(requestCommentsSuccess(response.data));
    })
    .catch(errors => {
      dispatch(requestCommentsError(errors.data));
    })
};

export const newCommentReceived = (comments) => {
  return {
    type: NEW_COMMENT_RECEIVED,
    comments
  }
};