import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  const activeItems = props.items.filter(item => item.active);
  const activeNumber = activeItems.length;

  return (
    <header>
      <h2>Wielkość zamówienia: {activeNumber}</h2>
      <h2>{ activeNumber===0 ? 'Nic nie kupujesz' : `Do zapłaty: ${activeNumber * 10} złotych` } </h2>
    </header>
  )
}

const Item = (props) => (
  <li>{props.name}</li>
)

const ListItems = (props) => {
  const item = props.items.map(item => (
    <Item 
      key={item.id}
      name = {item.name}
      active = {item.active}
    />
  ));

  return (
    <div>
      <h1>Twoje zamówienie</h1>
      <ul>
        {item}
      </ul>
    </div>   
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
        <ListItems items={this.state.items} />
      </>
    );
  }
}

export default App;
