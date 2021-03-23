import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
import { CongratulationsMessage } from './CongratulationsMessage';
import { CounterButton } from './CounterButton';
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";
import './App.css';



function App() { 

    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list"> Go to People List Page</Link>
        <Switch>
          <Router path="/" exact>
            <HomePage />
          </Router>
          <Router path="/counter/">
            <CounterButtonPage />
          </Router>
          <Router path="/people-list">
            <PeopleListPage />
          </Router>
          <Route path="/protected">
            <ProtectedPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
