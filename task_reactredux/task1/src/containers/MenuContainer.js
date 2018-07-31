import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../views/Menu/index';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.history.location.pathname === '/iTechArt-Lab-2018/about') {
      this.state = {
        value: 0,
        showMenu: true
      };
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/counters') {
      this.state = {
        value: 1,
        showMenu: true
      };
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/login') {
      this.state = {
        value: false,
        showMenu: true
      };
    }
     else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/') {
      this.state = {
        value: false,
        showMenu: true
      };
    } else {
      this.state = {
        value: false,
        showMenu: false
      };
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