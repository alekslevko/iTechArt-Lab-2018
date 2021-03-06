import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearErrorMessage, login, register } from '../actions';
import { validateUserName, validatePassword } from '../../../Validation';
import AccountForm from '../views';
import { withRouter } from 'react-router-dom';
import { applicationRoutes, errorMessagesEnum } from '../../../Constants';

class AccountFormContainer extends React.Component {
  componentDidMount() {
    this.props.clearErrorMessage();
  }

  handleSubmit = (values) => {
    const user = {
      userName: values.userName,
      passWord: values.password
    };

    if (this.getCurrentPath() === applicationRoutes.registerFormRoute) {
      register(this.props.dispatch, user, this.props.history);
    }

    if (this.getCurrentPath() === applicationRoutes.loginFormRoute) {
      login(this.props.dispatch, user, this.props.history);
    }
  };

  getCurrentPath = () => {
    return this.props.history.location.pathname;
  }

  validate = (values) => {
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
      <AccountForm
        haveAccountErrors={haveAccountErrors}
        errorMessage={errorMessage}
        currentPath={this.getCurrentPath()}
        onSubmit={this.handleSubmit}
        validate={this.validate} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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