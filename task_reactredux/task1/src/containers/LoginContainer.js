import React from 'react';
import Login from '../views/Login/index';
import { validateMail, validatePassword } from '../Validation';

const formDefaultValues = Object.freeze({
  mail: '',
  password: '',
  mailValid: false,
  passwordValid: false,
  wasSubmited: false
});

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

    this.setState({
      wasSubmited: true
    });

    if (mailValid && passwordValid) {
      alert(JSON.stringify({ mail: mail, password: password }));

      this.setState(formDefaultValues);
    } 
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onMailChange={this.onMailChange}
        onPasswordChange={this.onPasswordChange}
        wasSubmited={this.state.wasSubmited}
        mail={this.state.mail}
        password={this.state.password}
        mailValid={this.state.mailValid}
        passwordValid={this.state.passwordValid} />
    );
  }
}

export default LoginContainer;