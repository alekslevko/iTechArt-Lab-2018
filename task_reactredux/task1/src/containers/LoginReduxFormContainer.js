import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onMailChange, onPasswordChange } from '../actions/index';
import { validateMail, validatePassword } from '../Validation';
import LoginReduxForm from '../views/LoginReduxForm';
import { errorMessagesEnum } from '../Constants';

class LoginReduxFormContainer extends React.Component {
  submit = values => {
    console.log(values);
    this.props.onMailChange(values.mail);
    this.props.onPasswordChange(values.password);
    this.props.history.push(
      `${this.props.history.location.pathname}/success`);
  }

  Validation = values => {
    const errors = {};

    if (!values.mail) {
      errors.mail = errorMessagesEnum.FieldIsRequired;
    } else if (!validateMail(values.mail)) {
      errors.mail = errorMessagesEnum.EmailErrorMessage;
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
      <LoginReduxForm
        onSubmit={this.submit}
        validate={this.Validation}
        mail={this.props.mail}
        password={this.props.mail} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMailChange: bindActionCreators(onMailChange, dispatch),
    onPasswordChange: bindActionCreators(onPasswordChange, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.form
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(LoginReduxFormContainer);