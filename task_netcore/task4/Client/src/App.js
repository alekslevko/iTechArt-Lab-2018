import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './modules/Header/containers/HeaderContainer';
import Main from './Router/index';

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
