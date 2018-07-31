import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../views/Menu/index';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      showMenu: true
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  componentDidMount() {
    if (this.props.history.location.pathname === '/iTechArt-Lab-2018/about') {
      this.setState({
        value: 0,
        showMenu: true
      });
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/counters') {
      this.setState({
        value: 1,
        showMenu: true
      });
    } else if (this.props.history.location.pathname === '/iTechArt-Lab-2018/') {
      this.setState({
        value: -1,
        showMenu: true
      });
    } else {
      this.setState({
        value: false,
        showMenu: false
      });
    }
  }

  render() {
    return (
      <Menu handleChange={this.handleChange}
        value={this.state.value}
        showMenu={this.state.showMenu} 
      />
    );
  }
}

export default withRouter(MenuContainer);