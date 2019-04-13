import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import SignUp from "./components/signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ Map } />
          <Route exact path='/signup' component={ SignUp } />
        </div>
      </Router>
    );
  }
}

export default App;
