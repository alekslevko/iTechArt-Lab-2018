import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../views/Menu/index';

const tabsActiveLinkStates = {
  '/iTechArt-Lab-2018/about': {
    value: 0,
    showMenu: true
  },
  '/iTechArt-Lab-2018/counters': {
    value: 1,
    showMenu: true
  },
  '/iTechArt-Lab-2018/login': {
    value: 2,
    showMenu: true
  },
  '/iTechArt-Lab-2018/login-redux': {
    value: 3,
    showMenu: true
  },
  '/iTechArt-Lab-2018/login-redux/success': {
    value: 3,
    showMenu: true
  },
  '/iTechArt-Lab-2018/': {
    value: false,
    showMenu: true
  },
  '/': {
    value: false,
    showMenu: true
  },
  'default': {
    value: false,
    showMenu: false
  }
}

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...tabsActiveLinkStates[this.props.history.location.pathname]};
    console.log(this.state)
  }   
    
  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount(){
    if(tabsActiveLinkStates[this.props.history.location.pathname] === undefined){
      this.setState({...tabsActiveLinkStates['default']});
    }
  }

  render() {
    return (
      <Menu 
        handleChange={this.handleChange}
        value={this.state.value}
        showMenu={this.state.showMenu}  />     
    );
  }
}

export default withRouter(MenuContainer);