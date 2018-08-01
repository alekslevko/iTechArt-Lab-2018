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

  onInputChange = (e) => {
    let value = e.target.value;

    this.setState({
      mail: value,
      mailValid: validateMail(value)
    });

    document.getElementById('mail_info').value = value;
  }

  onPasswordChange = (e) => {
    let value = e.target.value;

    this.setState({
      password: value,
      passwordValid: validatePassword(value)
    });

    document.getElementById('pass_info').value = value;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.mailValid && this.state.passwordValid) {
      console.log(JSON.stringify(this.state));
      alert(JSON.stringify({ mail: this.state.mail, password: this.state.password }));

      this.setState({
        mail: '',
        password: '',
        mailValid: false,
        passwordValid: false
      });

      document.getElementById('mail_info').value = '';
      document.getElementById('pass_info').value = '';
    }
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onInputChange={this.onInputChange}
        onPasswordChange={this.onPasswordChange}
        mail={this.state.mail}
        password={this.state.password}
        mailValid={this.state.mailValid}
        passwordValid={this.state.passwordValid} />
    );
  }
}

export default LoginContainer;