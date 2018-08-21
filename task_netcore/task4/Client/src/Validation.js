import { REG_EXPR, MIN_USERNAME_LENGTH } from './Constants';

export const validateUserName = (userName) => {
    return userName.length > MIN_USERNAME_LENGTH;
}

export const validatePassword = (password) => {
    return REG_EXPR.test(String(password));
}