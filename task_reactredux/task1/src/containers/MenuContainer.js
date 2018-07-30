import React from 'react';
import { Switch, Route, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import About from '../views/About/index';
import CountersParentContainer from './CountersParentContainer';
import NotFound from '../views/NotFound/index';
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

  componentWillMount() {
    if (this.props.history.location.pathname === "/iTechArt-Lab-2018/about") {
      this.setState({ 
        value: 0,
        showMenu: true
      });
    } else if (this.props.history.location.pathname === "/iTechArt-Lab-2018/counters"){
      this.setState({ 
        value: 1, 
        showMenu: true
      });
    } else if (this.props.history.location.pathname === "/iTechArt-Lab-2018/"){
      this.setState({ 
        value: false,
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
      <BrowserRouter>
        <div>
          <Menu handleChange={this.handleChange}
            value={this.state.value}
            showMenu={this.state.showMenu} />
          <div>
            <Switch>
              <Route exact path='/iTechArt-Lab-2018/' component={null} />
              <Route path='/iTechArt-Lab-2018/about' component={About} />
              <Route path='/iTechArt-Lab-2018/counters' component={CountersParentContainer} />
              <Route path='/iTechArt-Lab-2018/404' component={NotFound} />
              <Route path='/iTechArt-Lab-2018/*' >
                <Redirect to='/iTechArt-Lab-2018/404' />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(MenuContainer);

