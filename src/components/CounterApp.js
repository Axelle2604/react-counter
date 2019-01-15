import React, { Component } from 'react';
import './counterApp.css';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0,
    };
  }

  onClickIncrementing(nb) {
    this.setState({
      currentNumber: this.state.currentNumber + nb,
    });
  }

  onClickDecrementing(nb) {
    this.setState({
      currentNumber: this.state.currentNumber - nb,
    });
  }

  render() {
    return (
      <div className="CounterApp">
        <button
          className="incrementingButton"
          onClick={() => this.onClickIncrementing(10)}
        >
          +10
        </button>
        <button
          className="incrementingButton"
          onClick={() => this.onClickIncrementing(1)}
        >
          +1
        </button>
        <div className="numberValue">{this.state.currentNumber}</div>
        <button
          className="decrementingButton1"
          onClick={() => this.onClickDecrementing(1)}
        >
          -1
        </button>
        <button
          className="decrementingButton10"
          onClick={() => this.onClickDecrementing(10)}
        >
          -10
        </button>
      </div>
    );
  }
}

export default CounterApp;
