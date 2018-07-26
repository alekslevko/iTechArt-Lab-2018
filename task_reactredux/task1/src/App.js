import React, { Component } from 'react';
import './App.css';
import CounterAddDelContainer from './containers/CounterAddDelContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterAddDelContainer />
      </div>
    );
  }
}

export default App;
