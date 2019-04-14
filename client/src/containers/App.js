import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import MyGoogleMap from "./components/Map/MyGoogleMap";
import SignUp from "./components/Signup/signup";
import Login from "./components/Login/login";
import CameraCustom from "./components/Camera/camera";
import Options from "./components/Home/Options";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Options} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/googlemap" component={MyGoogleMap} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/camera-custom" component={CameraCustom} />
        </div>
      </Router>
    );
  }
}

export default App;
