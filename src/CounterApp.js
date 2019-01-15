import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0,
    };
  }

  onClickIncrementingButton10() {
    this.setState({
      currentNumber: this.state.currentNumber + 10,
    });
    console.log(this.state.currentNumber);
  }
  onClickIncrementingButton1() {
    this.setState({
      currentNumber: this.state.currentNumber + 1,
    });
    console.log(this.state.currentNumber);
  }
  onClickDecrementingButton10() {
    this.setState({
      currentNumber: this.state.currentNumber - 10,
    });
    console.log(this.state.currentNumber);
  }
  onClickDecrementingButton1() {
    this.setState({
      currentNumber: this.state.currentNumber - 1,
    });
    console.log(this.state.currentNumber);
  }

  render() {
    return (
      <div className="CounterApp">
        <button
          className="incrementingButton10"
          onClick={this.onClickIncrementingButton10.bind(this)}
        >
          +10
        </button>
        <button
          className="incrementingButton1"
          onClick={this.onClickIncrementingButton1.bind(this)}
        >
          +1
        </button>
        <div className="numberValue">{this.state.currentNumber}</div>
        <button
          className="decrementingButton1"
          onClick={this.onClickDecrementingButton1.bind(this)}
        >
          -1
        </button>
        <button
          className="decrementingButton10"
          onClick={this.onClickDecrementingButton10.bind(this)}
        >
          -10
        </button>
      </div>
    );
  }
}

export default CounterApp;
