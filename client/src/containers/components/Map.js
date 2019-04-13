import React, { Component } from "react";
import MapGL, { NavigationControl } from "react-map-gl";
const TOKEN =
  "pk.eyJ1Ijoic3VnYXJzeW50YXgiLCJhIjoiY2p1ZjI2M2pyMDlyMDQ0cGJ3YmZjNXJ6OCJ9.muQlysMHeqeaMY0h237YJg";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 34.0195,
        longitude: -118.4912,
        zoom: 4,
        bearing: 0,
        pitch: 0,
        width: "100%",
        height: "100%"
      }
    };
  }
  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={ TOKEN }
      >
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    );
  }
}
