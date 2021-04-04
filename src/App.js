import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 
  { HomePage, 
    CounterButtonPage, 
    PeopleListPage, 
    NotFoundPage, 
    ProtectedPage, 
    ControlledFormPage,
    UncontrolledFormPage,
    UserProfilePage,
  } from './pages';
import { UserDataLoader } from './UserDataLoader';
import { NavBar } from './pages/NavBar';
import { FormsNavBar } from './FormsNavBar';
import './App.css';



function App() { 

    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
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
            <Route path="/user">
              <UserDataLoader>
                <UserProfilePage />
              </UserDataLoader>
            </Route>
            <Route path="/forms">
              <Router>
                <FormsNavBar />
                <Route path="/forms/controlled">
                  <ControlledFormPage />
                </Route>
                <Route path="/forms/uncontrolled">
                  <UncontrolledFormPage />
                </Route>
              </Router>

            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
