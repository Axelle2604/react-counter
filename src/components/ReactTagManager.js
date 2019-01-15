import React, { Component } from 'react';
import './reactTagManager.css';
import TagItem from './TagItem';

class ReactTagManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tags: [],
    };
  }

  onChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(e.target.value);
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.createTag();
    }
  }

  createTag() {
    if (this.state.inputValue.length > 0) {
      this.setState(
        {
          tags: this.state.tags.concat(this.state.inputValue),
        },
        () => {
          this.setState({
            inputValue: '',
          });
          console.log(this.state.inputValue);
          console.log(this.state.tags);
        }
      );
    }
  }

  supprTag() {
    console.log('supprtag');
  }

  render() {
    return (
      <div className="reactTagManager">
        {this.state.tags.map(tag => (
          <TagItem key={tag} value={tag} supprTag={this.supprTag.bind(this)} />
        ))}
        <input
          type="text"
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default ReactTagManager;
