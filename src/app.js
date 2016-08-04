import React, { Component } from 'react';
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
        <Inputs find={this.findDestination.bind(this)} />
        <div className="result">{ this.state.result }</div>
      </div>
    );
  }
}

export default App;
