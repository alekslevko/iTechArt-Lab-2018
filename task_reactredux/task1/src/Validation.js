import { MIN_PASSWORD_LENGTH, REG_EXPR } from './Constants';

export const validateMail = (email) => {
    return REG_EXPR.test(String(email).toLowerCase());
}

export const validatePassword = (password) => {
    return password.length > MIN_PASSWORD_LENGTH;
}