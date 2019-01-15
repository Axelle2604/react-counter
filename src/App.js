import React, { Component } from 'react';
import './App.css';
import CounterApp from './components/CounterApp.js';
import CountDownTimer from './components/CountDownTimer.js';
import Calculator from './components/Calculator.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
