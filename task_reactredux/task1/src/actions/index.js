import {ON_MAIL_CHANGE, ON_PASSWORD_CHANGE, HANDLE_SUBMIT} from '../Constants';

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

export const handleSubmit = (wasSubmited) => {
  return {
    type: HANDLE_SUBMIT,
    wasSubmited
  }
};