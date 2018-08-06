import { ON_MAIL_CHANGE, ON_PASSWORD_CHANGE, HANDLE_SUBMIT, ON_MAIL_CHANGE_REDUX_FORM, ON_PASSWORD_CHANGE_REDUX_FORM} from './types';

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

export const onMailChangeReduxForm = (mail) => {
  return {
    type: ON_MAIL_CHANGE_REDUX_FORM,
    mail
  }
};

export const onPasswordChangeReduxForm = (password) => {
  return {
    type: ON_PASSWORD_CHANGE_REDUX_FORM,
    password
  }
};