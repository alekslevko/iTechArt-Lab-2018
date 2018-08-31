import { PASSWORD_VALIDATION_EXP, MIN_USERNAME_LENGTH } from './Constants';

export const validateUserName = (userName) => {
    return userName.length > MIN_USERNAME_LENGTH;
}

export const validatePassword = (password) => {
    return PASSWORD_VALIDATION_EXP.test(String(password));
}