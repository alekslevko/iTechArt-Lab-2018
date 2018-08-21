import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isAuth, saveUserNameFromForm } from '../actions/index';
import { validateUserName, validatePassword } from '../Validation';
import RegisterReduxForm from '../views/RegisterReduxForm';
import { errorMessagesEnum } from '../Constants';
import { withRouter } from 'react-router-dom';
import { applicationRoutes } from '../Constants';
import axios from 'axios';

class RegisterReduxFormContainer extends React.Component {
  handleSubmit = (values) => {
    const user = {
      username: values.userName,
      password: values.password
    };

    if (this.currentPath() === applicationRoutes.registerReduxFormRoute) {
      axios.post(`http://localhost:50834/account/register`, user)
        .then(response => {
          this.setToken(response.data);          
        })
    }

    if (this.currentPath() === applicationRoutes.loginReduxFormRoute) {
      axios.post(`http://localhost:50834/account/login`, user)
        .then(response => {
          this.setToken(response.data);  
        });
    }
    
    this.props.isAuth();
    this.props.saveUserNameFromForm(user.username);
    this.props.history.push(
      applicationRoutes.moviesRoute);
  };

  setToken = (response) => {
    sessionStorage.setItem('token', response);
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
    return (
      <RegisterReduxForm
        currentPath={this.currentPath()}
        onSubmit={this.handleSubmit}
        validate={this.Validation} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuth: bindActionCreators(isAuth, dispatch),
    saveUserNameFromForm: bindActionCreators(saveUserNameFromForm, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    formState: { ...state.form.register },
    ...state.isAuth,
    ...state.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterReduxFormContainer));