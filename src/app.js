import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputs from './components/inputs'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result:''
    };
  }

  findDestination(something) {
    this.setState({result: something});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Inputs find={this.findDestination.bind(this)} />
        <div className="result">{ this.state.result }</div>
      </div>
    );
  }
}

export default App;
