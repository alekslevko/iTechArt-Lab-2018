import React, { Component } from 'react';
import './App.css';
import MenuContainer from './containers/MenuContainer';
import Main from './views/Router/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuContainer />
        <Main />
      </div>
    );
  }
}

export default App;
