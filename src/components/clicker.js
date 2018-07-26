import React, { Component } from 'react';
import Show from './show';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numToggles: 0,
      showComponent: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  handleToggle() {
    this.setState({
      numToggles: this.state.numToggles + 1
    });
  }

  onButtonClick() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }
  render() {
    return (
      <div>
      <h2>Hello, world!</h2>
       <div>{this.props.handSomethingDown}</div>
       <button onClick={this.handleToggle}>Click Me</button>
       <p>I have been toggled {this.state.numToggles} times</p>

       <button onClick={this.onButtonClick}>Click me to show then hide a Component</button>
       {this.state.showComponent ?
          <Show />
        : null}
      </div>
    );
  }
}

export default Clicker;
