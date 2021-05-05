import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from "./components/Cards";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Cards />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </ React.Fragment>
  );
}

export default App;;
