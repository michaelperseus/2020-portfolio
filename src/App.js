import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Box from './Components/Box';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/react-test/" exact={true} component={Hero} />
            <Route path="/react-test/box" component={Box} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
