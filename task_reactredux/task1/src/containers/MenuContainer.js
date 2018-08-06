import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../views/Menu';
import { applicationRoutes } from '../Constants';

const tabsActiveLinkStates = {
  [applicationRoutes.aboutRoute]: {
    value: 0,
    showMenu: true
  },
  [applicationRoutes.countersRoute]: {
    value: 1,
    showMenu: true
  },
  [applicationRoutes.loginRoute]: {
    value: 2,
    showMenu: true
  },
  [applicationRoutes.loginReduxRoute]: {
    value: 3,
    showMenu: true
  },
  [applicationRoutes.loginReduxSuccessRoute]: {
    value: 3,
    showMenu: true
  },
  [applicationRoutes.loginReduxFormRoute]: {
    value: 4,
    showMenu: true
  },
  [applicationRoutes.loginReduxFormSuccessRoute]: {
    value: 4,
    showMenu: true
  },
  [applicationRoutes.startPageRoute]: {
    value: false,
    showMenu: true
  },
  [applicationRoutes.defaultRoute]: {
    value: false,
    showMenu: true
  },
  [applicationRoutes.errorRoute]: {
    value: false,
    showMenu: false
  }
}

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...(tabsActiveLinkStates[this.props.history.location.pathname] ||
        tabsActiveLinkStates[applicationRoutes.errorRoute])
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    return (
      <Menu
        handleChange={this.handleChange}
        value={this.state.value}
        showMenu={this.state.showMenu} />
    );
  }
}

export default withRouter(MenuContainer);