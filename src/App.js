import React, { Component } from 'react';
import './App.css';
import CounterApp from './CounterApp.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CounterApp />
      </div>
    );
  }
}

export default App;
