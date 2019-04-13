import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ Map } />
          <Route exact path='/login' component={ Login } />
			    <Route exact path='/register' component={ Register } />
        </div>
      </Router>
    );
  }
}

export default App;
