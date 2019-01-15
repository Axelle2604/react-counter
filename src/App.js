import React, { Component } from 'react';
import './App.css';
import CounterApp from './components/CounterApp.js';
import CountDownTimer from './components/CountDownTimer.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CountDownTimer />
      </div>
    );
  }
}

export default App;
