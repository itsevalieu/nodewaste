import React, {Component} from 'react';
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import './Map.css';

const TOKEN = 'pk.eyJ1Ijoic3VnYXJzeW50YXgiLCJhIjoiY2p1ZjI2M2pyMDlyMDQ0cGJ3YmZjNXJ6OCJ9.muQlysMHeqeaMY0h237YJg';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 34.020130, 
        longitude: -118.484962,
        zoom: 11,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      }
    };
  }
  render() {
    const {viewport} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
          <Marker latitude={34.0229} longitude={-118.4694} offsetLeft={-20} offsetTop={-10}></Marker>
        </div>
      </MapGL>
    );
  }
}