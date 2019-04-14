import React, { Component } from 'react';
import {  GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps';
import './Map.css';
import CampaignItem from '../Campaign/CampaignItem';
import Search from './components/Search';

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
          icon='http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png'
          onClick={() => this.props.onToggle(marker)}
         >{marker.isOpen && <InfoWindow onCloseClick={()=>this.props.onToggle(marker)}>
            <div className='infowindow'>
              <CampaignItem location={marker}/>
            </div>
            </InfoWindow>}
       </Marker>
      ))}
      <Search/>
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
