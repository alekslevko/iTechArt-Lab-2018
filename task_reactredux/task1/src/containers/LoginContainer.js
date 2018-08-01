import React from 'react';
import Login from '../views/Login/index';
import { validateMail, validatePassword } from '../Validation';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      mailValid: false,
      passwordValid: false
    }
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

    let {mail, password} = this.state;

    if (this.state.mailValid && this.state.passwordValid) {
      console.log(JSON.stringify(this.state));
      alert(JSON.stringify({ mail: mail, password: password }));

      this.setState({
        mail: '',
        password: '',
        mailValid: false,
        passwordValid: false
      });
    } else {
      this.OnError();
    }
  }

  OnError = () => {
    switch(true) {
      case (!this.state.mailValid):
        alert("Введите корректно почту!");
        break;
      case (!this.state.passwordValid):
        alert("Пароль минимум 6 символов");
        break;
    }
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onMailChange={this.onMailChange}
        onPasswordChange={this.onPasswordChange}
        mail={this.state.mail}
        password={this.state.password}
        mailValid={this.state.mailValid}
        passwordValid={this.state.passwordValid} />
    );
  }
}

export default LoginContainer;