import React from 'react';
import { CounterButton } from './CounterButton';
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";
import './App.css';

const people = [{
  name: 'Kayla',
  age: 2,
  hairColor: 'Black',
}, {
  name: 'Noella',
  age: 26,
  hairColor: 'blonde',
}, {
  name: 'Kalvin',
  age: 29,
  hairColor: 'brown',  
}];

function App() {
    let adjective = 'awesome';
    let url = 'https://reactjs.org'; 
  
  return (
    <div className="App">
      <header className="App-header">
       <CounterButton />
      </header>
    </div>
  );
}

export default App;
