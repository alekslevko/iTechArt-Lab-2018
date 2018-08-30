import { HEADER_HANDLE_CLOSE, HEADER_HANDLE_MENU, LOG_OUT, IS_AUTH } from './types'

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

  export const logOut = () => {
    return {
      type: LOG_OUT
    }
  }

  export const isAuth = () => {
    return {
      type: IS_AUTH
    }
  }