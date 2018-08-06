import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveMailFromForm, savePasswordFromForm } from '../actions/index';
import { validateMail, validatePassword } from '../Validation';
import LoginReduxForm from '../views/LoginReduxForm';
import { errorMessagesEnum } from '../Constants';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = (values) => {
    this.props.saveMailFromForm(values.mail);
    this.props.savePasswordFromForm(values.password);
    this.props.history.push(
      `${this.props.history.location.pathname}/success`);
  };

  Validation = (values) => {
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
    let { mail, password } = this.props.formState.values
			? this.props.formState.values : '';
			
    return (
      <LoginReduxForm
        onSubmit={this.handleSubmit}
        mail={mail}
        password={password}
        validate={this.Validation} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveMailFromForm: bindActionCreators(saveMailFromForm, dispatch),
    savePasswordFromForm: bindActionCreators(savePasswordFromForm, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    formState: {...state.form.login},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);