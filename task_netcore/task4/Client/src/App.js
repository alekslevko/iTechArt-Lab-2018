import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import Main from './views/Router/index';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderContainer />
        <Main />
      </div>
    );
  }
}

export default App;
