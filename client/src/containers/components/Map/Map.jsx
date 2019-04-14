import React, { Component } from 'react';
import {  GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps';
import './Map.css';
import CampaignItem from '../Campaign/CampaignItem';

class Map extends Component {
  state = {
    currentPosition: {
      lat: 34.023554, 
      lng: -118.483395
    }
  }

  render() {
    return(
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 34.020130, lng: -118.484962 }}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: true,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false,
          scrollwheel: false
        }}
      >{this.props.markers.map((marker, index) =>(
        <Marker
          key={index}
          position={marker.location}
          onClick={() => this.props.onToggle(marker)}
         >{marker.isOpen && <InfoWindow onCloseClick={()=>this.props.onToggle(marker)}>
            <div className='infowindow'>
              <CampaignItem location={marker}/>
              <a href={marker.link}><button>Take Me There</button></a>
            </div>
            </InfoWindow>}
       </Marker>
      ))}
      <Marker
        icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
        position={this.state.currentPosition}
      />
      </GoogleMap>
    </div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map))
