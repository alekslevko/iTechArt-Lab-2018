import { CLEAR_ERROR_MESSAGE, HEADER_HANDLE_CLOSE, HEADER_HANDLE_MENU, IS_AUTH, SHOW_ERROR_MESSAGE, LOG_OUT, CLEAR_COMMENT_FIELD, ON_COMMENT_CHANGE } from './types';

export const headerHandleMenu = (anchorEl) => {
  return {
    type: HEADER_HANDLE_MENU,
    anchorEl
  }
}

export const headerHandleClose = () => {
  return {
    type: HEADER_HANDLE_CLOSE    
  }
}

export const isAuth = () => {
  return {
    type: IS_AUTH    
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT    
  }
}

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

export const clearCommentField = () => {
  return {
    type: CLEAR_COMMENT_FIELD
  }
}

export const onCommentChange = (comment) => {
  return {
    type: ON_COMMENT_CHANGE,
    comment
  }
}