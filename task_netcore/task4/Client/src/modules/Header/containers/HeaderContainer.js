import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../views';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleHeaderClose, handleHeaderMenu, logOut } from '../actions';
import { SessionService } from '../../../Services/SessionService';

class HeaderContainer extends React.Component {
  getCurrentPath = () => {
    return this.props.history.location.pathname;
  }

  handleHeaderMenu = (event) => {
    let value = event.currentTarget;
    this.props.handleHeaderMenu(value);
  };

  handleHeaderClose = () => {
    this.props.handleHeaderClose();
  };

  logOut = () => {
    SessionService.removeItem('account');
    this.props.logOut();
  }
  
  render() {
    const { anchorEl, isAuth } = this.props;
    const open = Boolean(anchorEl);
    let userName = '';
    const acсount = SessionService.getJsonItem('account');

    if (acсount) {
      userName = acсount.userName;
    }   
  
    return (
      <Header
        handleMenu={this.handleHeaderMenu}
        handleClose={this.handleHeaderClose}
        logOut={this.logOut}
        anchorEl={anchorEl}
        open={open}
        userName={userName}
        isAuth={isAuth}
        path={this.getCurrentPath()}  />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleHeaderClose: bindActionCreators(handleHeaderClose, dispatch),
    handleHeaderMenu: bindActionCreators(handleHeaderMenu, dispatch),
    logOut: bindActionCreators(logOut, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.header,
    ...state.isAuth
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));