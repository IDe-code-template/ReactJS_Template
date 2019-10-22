import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import User from './Components/user/user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IDE> Code React Starter code</h1>
          <User />
        </header>
      </div>
    );
  }
}

export default App;
