import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "produkt1", active: true },
      { id: 2, name: "produkt2", active: true },
      { id: 3, name: "produkt3", active: false },
      { id: 4, name: "produkt4", active: true },
      { id: 5, name: "produkt5", active: false },
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test
          </a>
        </header>
      </div>
    );
  }
}

export default App;
