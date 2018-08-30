import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearErrorMessage, axiosLogin, axiosRegister } from '../actions';
import { isAuth } from '../../Header/actions'
import { validateUserName, validatePassword } from '../../../Validation';
import AccountForm from '../views';
import { withRouter } from 'react-router-dom';
import { applicationRoutes, errorMessagesEnum } from '../../../Constants';
import { SessionService } from '../../../Services/SessionService';

class AccountFormContainer extends React.Component {
  componentDidMount() {
    this.props.clearErrorMessage();
  }

  handleSubmit = (values) => {
    const user = {
      userName: values.userName,
      passWord: values.password
    }; 

    if (this.currentPath() === applicationRoutes.registerFormRoute) {
      axiosRegister(this.props.dispatch, user);
      if(SessionService.hasItem('user'))
        this.onSuccess();
    }

    if (this.currentPath() === applicationRoutes.loginFormRoute) {
      axiosLogin(this.props.dispatch, user);
      if(SessionService.hasItem('user'))
        this.onSuccess();
    }
  };

  onSuccess = () => {
      this.props.isAuth();
      this.props.history.push(
        applicationRoutes.moviesRoute);
  }

  currentPath = () => {
    return this.props.history.location.pathname;
  }

  Validation = (values) => {
    const errors = {};

    if (!values.userName) {
      errors.userName = errorMessagesEnum.FieldIsRequired;
    } else if (!validateUserName(values.userName)) {
      errors.userName = errorMessagesEnum.UserNameErrorMessage;
    }

    if (!values.password) {
      errors.password = errorMessagesEnum.FieldIsRequired;
    } else if (!validatePassword(values.password)) {
      errors.password = errorMessagesEnum.PasswordErrorMessage;
    }

    return errors;
  };

  render() {
    const { haveAccountErrors, errorMessage } = this.props;
    console.log(this.props);
    console.log(sessionStorage);
    return (
      <AccountForm
        haveAccountErrors={haveAccountErrors}
        errorMessage={errorMessage}
        currentPath={this.currentPath()}
        onSubmit={this.handleSubmit}
        validate={this.Validation} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuth: bindActionCreators(isAuth, dispatch),
    clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch),
    dispatch
  }
};

const mapStateToProps = (state) => {
  return {
    formState: { ...state.form.register },
    ...state.isAuth,
    ...state.account
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountFormContainer));