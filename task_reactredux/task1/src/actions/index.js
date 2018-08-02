import {ON_MAIL_CHANGE, ON_PASSWORD_CHANGE, VALIDATE_MAIL, VALIDATE_PASSWORD, HANDLE_SUBMIT} from '../Constants';

export const onMailChange = (mail) => {
  return {
    type: ON_MAIL_CHANGE,
    mail
  }
};

export const onPasswordChange = (password) => {
  return {
    type: ON_PASSWORD_CHANGE,
    password
  }
};

export const validateMail = (mail) => {
  return {
    type: VALIDATE_MAIL,
    mail
  }
};

export const validatePassword = (password) => {
  return {
    type: VALIDATE_PASSWORD,
    password
  }
};

export const handleSubmit = (wasSubmited) => {
  return {
    type: HANDLE_SUBMIT,
    wasSubmited
  }
};