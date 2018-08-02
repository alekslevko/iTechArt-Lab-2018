import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../views/Menu/index';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.handlePropsUpdate(true)
  }

  componentDidUpdate(prevProps) {
    let routeChanged = prevProps.location !== this.props.location;
    if (routeChanged) {
      this.handlePropsUpdate();
    }
  }

  handlePropsUpdate = (shouldReturnState) => {
    let state;
    if (this.props.history.location.pathname === '/iTechArt-Lab-2018/about') {
      state = {
        value: 0,
        showMenu: true
      };
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/counters') {
      state = {
        value: 1,
        showMenu: true
      };
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/login') {
      state = {
        value: 2,
        showMenu: true
      };
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/login-redux' ||
      this.props.history.location.pathname === '/iTechArt-Lab-2018/login-redux/success') {
      state = {
        value: 3,
        showMenu: true
      };
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/') {
      state = {
        value: false,
        showMenu: true
      };
    } else {
      state = {
        value: false,
        showMenu: false
      };
    }

    if (shouldReturnState) {
      return state;
    } else {
      this.setState(state);
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Menu handleChange={this.handleChange}
        value={this.state.value}
        showMenu={this.state.showMenu} />
    );
  }
}

export default withRouter(MenuContainer);