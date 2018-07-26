import React, { Component } from 'react';
import Clicker from './clicker';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>State and Props</h1>
        <Clicker handSomethingDown="Hello I am a prop" /> 
        <Clicker handSomethingDown="I'm passing in another prop" /> 
      </div>
    );
  }
}

