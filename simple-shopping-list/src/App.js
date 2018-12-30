import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <header>Podsumowanie zamówienia</header>
  )
}

const ListItems = (props) => {
  return (
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

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
      <>
        <Header items={this.state.items} />
        <ListItems />
      </>
    );
  }
}

export default App;
