import React, { Component } from 'react';
import './App.css';
import CounterApp from './components/CounterApp.js';
import CountDownTimer from './components/CountDownTimer.js';
import Calculator from './components/Calculator.js';
import ReactTagManager from './components/ReactTagManager.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ReactTagManager />
      </div>
    );
  }
}

export default App;
