import React, { Component } from 'react';
import {  GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps'

class Map extends Component {
  render() {
    return(
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 34.020130, lng: -118.484962 }}
      >{this.props.markers.map((marker, index) =>(
        <Marker
          key={index}
          position={marker.location}
          onClick={() => this.props.onToggle(marker)}
         >{marker.isOpen && <InfoWindow onCloseClick={()=>this.props.onToggle(marker)}><div>Hello</div></InfoWindow>}
       </Marker>
      ))}
      </GoogleMap>
    </div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map))
