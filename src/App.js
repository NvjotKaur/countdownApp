import React, { Component } from 'react';
import './App.css';
import CountHours from './components/countdown'

class App extends Component {
  render() {
    return (
      <div className="App">
         <CountHours/>
      </div>
    );
  }
}

export default App;
