import React, { Component } from "react";
// import MapGL, { NavigationControl } from "react-map-gl";
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = "pk.eyJ1Ijoic3VnYXJzeW50YXgiLCJhIjoiY2p1ZjI2M2pyMDlyMDQ0cGJ3YmZjNXJ6OCJ9.muQlysMHeqeaMY0h237YJg";

class Map extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lng: -118.4912,
      lat: 34.0195,
      zoom: 12
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });
    
      map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="map">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}
export default Map;