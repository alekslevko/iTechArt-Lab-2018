import { MIN_PASSWORD_LENGTH, REG_EXPR, ERROR_MESSAGES } from './Constants';

export const validateMail = (email) => {
    return REG_EXPR.test(String(email).toLowerCase());
}

export const validatePassword = (password) => {
    return password.length > MIN_PASSWORD_LENGTH;
}

export const OnMailError = (message) => {
    let mailError = document.getElementById('mail-error');
    let mailMessage = message;
    mailError.innerHTML = mailMessage;
};

export const OnPasswordError = (message) => {
    let passwordError = document.getElementById('password-error');
    let passwordMessage = message;
    passwordError.innerHTML = passwordMessage;
};

export const OnError = (mailIsValid, passwordIsValid) => {
    if (!mailIsValid) {
      OnMailError(ERROR_MESSAGES[0]);
    } else {
      OnMailError('');
    }
    if (!passwordIsValid) {
      OnPasswordError(ERROR_MESSAGES[1]);
    } else {
      OnPasswordError('');
    }
}