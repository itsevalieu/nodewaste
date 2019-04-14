import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Splash from "./components/Splash/Splash";

import Me from "./components/Me/Me";
import Notifications from "./components/Notifications/Notifications";
import Education from "./components/Education/Education";
import Settings from "./components/Settings/Settings";
import Campaign from "./components/Campaign/Campaign";

import CameraCustom from "./components/Camera/camera";
import Options from "./components/Home/Options";
import Searchbar from "./components/Home/SearchBar";

import CampaignButton from './components/Home/CampaignButton';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/welcome" component={Splash}/>
          <Route exact path="/" component={Searchbar} />
          <Route exact path="/" component={Options} />

          <Route exact path="/profile" component={Me} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/campaign" component={Campaign} />

          <Route exact path="/camera-custom" component={CameraCustom} />
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
