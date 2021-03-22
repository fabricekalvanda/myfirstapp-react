import React, { useState } from 'react';
import { CongratulationsMessage } from './CongratulationsMessage';
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

    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          : <CongratulationsMessage 
            numberOfClicks={numberOfClicks} 
            threshold={10} 
            onHide={() => setHideMessage(true)} />}
        
       <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
