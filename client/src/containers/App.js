import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import SignUp from "./components/signup";
import Login from './components/login';
import CameraCustom from './components/camera';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/map' component={ Map } />
          <Route exact path='/signup' component={ SignUp } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/camera-custom' component={ CameraCustom } />
        </div>
      </Router>
    );
  }
}

export default App;
