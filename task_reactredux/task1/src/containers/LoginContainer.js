import React from 'react';
import Login from '../views/Login/index';
import { validateMail, validatePassword, OnError } from '../Validation';
import { formDefaultValues } from '../Constants';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = formDefaultValues;
  }

  onMailChange = (e) => {
    let value = e.target.value;

    this.setState({
      mail: value,
      mailValid: validateMail(value)
    });
  }

  onPasswordChange = (e) => {
    let value = e.target.value;

    this.setState({
      password: value,
      passwordValid: validatePassword(value)
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { mail, password, mailValid, passwordValid } = this.state;

    if (this.state.mailValid && this.state.passwordValid) {
      alert(JSON.stringify({ mail: mail, password: password }));

      this.setState(formDefaultValues);
    } 

    OnError(this.state.mailValid, this.state.passwordValid);
  }

  

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onMailChange={this.onMailChange}
        onPasswordChange={this.onPasswordChange}
        onError={this.onError}
        mail={this.state.mail}
        password={this.state.password}
        mailValid={this.state.mailValid}
        passwordValid={this.state.passwordValid} />
    );
  }
}

export default LoginContainer;