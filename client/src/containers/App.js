import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import CameraCustom from "./components/Camera/camera";
import Options from "./components/Home/Options";
import Searchbar from "./components/Home/SearchBar";
import CampaignList from "./components/CampaignList/CampaignList";
import CampaignButton from './components/Home/CampaignButton';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Searchbar} />
          <Route exact path="/" component={Options} />
          <Route exact path="/" component={CampaignButton} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/campaign" component={CampaignList} />
          <Route exact path="/camera-custom" component={CameraCustom} />
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
