import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../views/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { headerHandleClose, headerHandleMenu, logOut } from '../actions'

class HeaderContainer extends React.Component {
  currentPath = () => {
    return this.props.history.location.pathname;
  }

  headerHandleMenu = (event) => {
    let value = event.currentTarget;
    this.props.headerHandleMenu(value);
  };

  headerHandleClose = () => {
    this.props.headerHandleClose();
  };

  logOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.props.logOut();
  }
  
  render() {
    const { anchorEl, isAuth } = this.props;
    const userName = sessionStorage.getItem('user');
    const open = Boolean(anchorEl);
  
    return (
      <Header
        handleMenu={this.headerHandleMenu}
        handleClose={this.headerHandleClose}
        logOut={this.logOut}
        anchorEl={anchorEl}
        open={open}
        userName={userName}
        isAuth={isAuth}
        path={this.currentPath()}  />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    headerHandleClose: bindActionCreators(headerHandleClose, dispatch),
    headerHandleMenu: bindActionCreators(headerHandleMenu, dispatch),
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