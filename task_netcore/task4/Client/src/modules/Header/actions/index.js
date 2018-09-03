import { HANDLE_HEADER_CLOSE, HANDLE_HEADER_MENU, LOG_OUT, IS_AUTH } from './types'

export const handleHeaderMenu = (anchorEl) => {
  return {
    type: HANDLE_HEADER_MENU,
    anchorEl
  }
}

export const handleHeaderClose = () => {
  return {
    type: HANDLE_HEADER_CLOSE
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