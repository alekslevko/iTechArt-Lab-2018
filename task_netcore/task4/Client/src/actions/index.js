import { SAVE_USERNAME_FROM_FORM, HEADER_HANDLE_CLOSE, HEADER_HANDLE_MENU, IS_AUTH, LOG_OUT } from './types';

export const saveUserNameFromForm = (userName) => {
  return {
    type: SAVE_USERNAME_FROM_FORM,
    userName
  }
};

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
