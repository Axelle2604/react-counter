import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 100,
      tip: 50,
      nbConsum: 2,
      priceByConsum: 0,
    };
  }

  onChangeValue(type, e) {
    this.setState(
      {
        [type]: e.target.value,
      },
      () => {
        this.setState({
          priceByConsum:
            (this.state.amount * this.state.tip) / 100 / this.state.nbConsum,
        });
      }
    );
  }

  render() {
    return (
      <div className="Calculator">
        <h1>Calculator</h1>
        <div>
          Amount :
          <input
            type="text"
            placeholder="Ex.: 120"
            onChange={this.onChangeValue.bind(this, 'amount')}
            value={this.state.amount}
          />
          $
        </div>
        <div>
          Tip :
          <input
            type="text"
            placeholder="Ex.: 10"
            onChange={this.onChangeValue.bind(this, 'tip')}
            value={this.state.tip}
          />
          %
        </div>
        <div>
          Number of consumers :
          <input
            type="text"
            placeholder="Ex.: 3"
            onChange={this.onChangeValue.bind(this, 'nbConsum')}
            value={this.state.nbConsum}
          />
          consumers
        </div>
        <p>PriceTip per person: {this.state.priceByConsum}</p>
      </div>
    );
  }
}

export default Calculator;
