import React from 'react';
import { onMailChange, onPasswordChange, handleSubmit } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../views/Login/index';

class LoginReduxContainer extends React.Component{

  onMailChange = (e) => {
    let value = e.target.value;
    this.props.onMailChange(value); 
  }

  onPasswordChange = (e) => {
    let value = e.target.value;
    this.props.onPasswordChange(value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    this.props.handleSubmit(true);

    const {mailValid, passwordValid} = this.props;
    if(mailValid && passwordValid){
      this.props.history.push(
        `${this.props.history.location.pathname}/success`);     
    }   
  }

  render() {
    return (<Login 
      handleSubmit = {this.handleSubmit}
      onMailChange = {this.onMailChange}
      onPasswordChange = {this.onPasswordChange}
      mail = {this.props.mail}
      wasSubmited = {this.props.wasSubmited}
      password = {this.props.password}
      mailValid = {this.props.mailValid}
      passwordValid = {this.props.passwordValid} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.mail,
    ...state.password,
    ...state.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMailChange: bindActionCreators(onMailChange, dispatch),
    onPasswordChange: bindActionCreators(onPasswordChange, dispatch),
    handleSubmit: bindActionCreators(handleSubmit,dispatch),  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);