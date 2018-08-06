import { ON_MAIL_CHANGE, ON_PASSWORD_CHANGE, HANDLE_SUBMIT, SAVE_MAIL_FROM_FORM, SAVE_PASSWORD_FROM_FORM } from './types';

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

export const saveMailFromForm = (mail) => {
  return {
    type: SAVE_MAIL_FROM_FORM,
    mail
  }
};

export const savePasswordFromForm = (password) => {
  return {
    type: SAVE_PASSWORD_FROM_FORM,
    password
  }
};