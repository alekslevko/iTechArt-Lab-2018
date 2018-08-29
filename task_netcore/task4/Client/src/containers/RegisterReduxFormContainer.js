import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isAuth, showErrorMessage, clearErrorMessage } from '../actions/index';
import { validateUserName, validatePassword } from '../Validation';
import RegisterReduxForm from '../views/RegisterReduxForm';
import { errorMessagesEnum } from '../Constants';
import { withRouter } from 'react-router-dom';
import { applicationRoutes } from '../Constants';
import axios from 'axios';
import { webApiRoutes } from '../Constants';

class RegisterReduxFormContainer extends React.Component {
  handleSubmit = (values) => {
    const user = {
      userName: values.userName,
      passWord: values.password
    };

    if (this.currentPath() === applicationRoutes.registerReduxFormRoute) {
      axios.post(webApiRoutes.registerRoute, user)
        .then(response => {
          this.onSuccess(response, user);
        })
        .catch(errors => {
          this.onFail(errors);
        });
    }

    if (this.currentPath() === applicationRoutes.loginReduxFormRoute) {
      axios.post(webApiRoutes.loginRoute, user)
        .then(response => {
          this.onSuccess(response, user);
        })
        .catch(errors => {
          this.onFail(errors);
        });
    }
  };

  onSuccess = (response, user) => {
    sessionStorage.setItem('token', response.data);
    sessionStorage.setItem('user', user.userName);
    
    this.props.isAuth();
    this.props.clearErrorMessage();
    this.props.history.push(
      applicationRoutes.moviesRoute);
  }

  onFail = (errors) => {
    let value;

    if (errors.response !== undefined) {
      value = errors.response.data;
    } else {
      value = "Server is not responding "
    }

    this.props.showErrorMessage(value);
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

    return (
      <RegisterReduxForm
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
    showErrorMessage: bindActionCreators(showErrorMessage, dispatch),
    clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    formState: { ...state.form.register },
    ...state.isAuth,
    ...state.errorsAccount
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterReduxFormContainer));