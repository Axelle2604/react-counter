import React, { Component } from 'react';
import './countDownTimer.css';

class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 5,
    };
  }

  startCountDown() {
    const futurTime =
      Date.now() +
      this.state.seconds * 1000 +
      this.state.minutes * 1000 * 60 +
      this.state.hours * 1000 * 60 * 60;

    this.intervalTimer = setInterval(() => {
      const distance = futurTime - Date.now();
      this.setState({
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      if (distance < 1) {
        clearInterval(this.intervalTimer);
      }
    }, 500);
  }

  stopCountDown() {
    clearInterval(this.intervalTimer);
  }

  render() {
    return (
      <div className="countDownTimer">
        <div className="countDownTimerContainer">
          <div className="containerDates">
            <div className="container">
              <p>Hours</p>
              <input
                className="inputValue"
                type="text"
                value={this.state.hours}
                onChange={e => this.setState({ hours: e.target.value })}
              />
            </div>
            <div className="container">
              <p>Minutes</p>
              <input
                className="inputValue"
                type="text"
                value={this.state.minutes}
                onChange={e => this.setState({ minutes: e.target.value })}
              />
            </div>
            <div className="container">
              <p>Seconds</p>
              <input
                className="inputValue"
                type="text"
                value={this.state.seconds}
                onChange={e => this.setState({ seconds: e.target.value })}
              />
            </div>
          </div>
          <div className="containerButtons">
            <button
              className="startButton"
              onClick={this.startCountDown.bind(this)}
            >
              Start
            </button>
            <button
              className="stopButton"
              onClick={this.stopCountDown.bind(this)}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDownTimer;
