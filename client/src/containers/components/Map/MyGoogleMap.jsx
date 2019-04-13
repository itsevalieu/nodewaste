import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker, 
  InfoWindow,
} from "react-google-maps";
import './MyGoogleMap.css'

const campaigns = [{
  name: 'MyFirstPlace Daycare',
  lat: 34.0229,
  long: -118.4694
},
{
  name: 'Amalia DayCare',
  lat: 34.0147,
  long: -118.4650
},
{
  name: 'Bright Horizons at Ocean Park',
  lat: 34.0206,
  long: -118.4492    
},
{
  name: 'Petit à Petit French Bilingual Daycare Santa Monica Day Care Garderie Crèche Francaise',
  lat: 34.0334,
  long: -118.4715
},
{
 name: 'Cuddle Bear Day Care',
  lat: 34.0320,
  long: -118.4786
},
{
 name: 'Sarian Family Child Care',
  lat: 34.0369,
  long: -118.4680
},
{
 name: 'Stepping Stone Child Care and Preschool',
  lat: 34.0183,
  long: -118.4595
},
{
 name: "Bright Horizons Children's Center at The Watergarden",
  lat: 34.0294,
  long: -118.4707
},
{
 name: 'Bright Start Learning Center',
  lat: 34.0252,
  long: -118.4809
},
{
 name: 'Empress Family Child Daycare',
  lat: 34.0330,
  long: -118.4632
},
{
 name: 'Early Bird Learning Centers',
  lat: 34.0258,
  long: -118.4939
},
{
 name: 'Ocean Park Child Care Center',
  lat: 34.0050,
  long: -118.4804
},
{
 name: 'Lighthouse Center for Infants',
  lat: 34.0347,
  long: -118.4714
},
{
 name: 'John Adams Child Development Center',
  lat: 34.0144,
  long: -118.4694
},
{
 name: 'Dreamland Infant Center',
  lat: 34.0350,
  long: -118.4639
},
{
 name: 'Gilly Bean Pre School',
  lat: 34.0127,
  long: -118.4647
},
{
 name: 'Pine Street Child Development Center',
  lat: 34.0075,
  long: -118.4778
},
{
 name: 'Lincoln Child Development Center',
  lat: 34.0295,
  long: -118.4888
},
{
 name: 'Les enfants',
  lat: 34.0256,
  long: -118.4636
},
{
 name: 'Montana Preschool',
  lat: 34.0454,
  long: -118.4964
}];

const MyGoogleMap = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJMqSSgQ9npfcAZ9hmcOJynEbB6h1BOEc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `95vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap className='googlemap' defaultZoom={13} defaultCenter={{ lat: 34.020130, lng: -118.484962 }}>
      {campaigns.map((campaign) => (
        <Marker position={ {lat: campaign.lat, lng: campaign.long} } onClick={props.onToggleOpen}>
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}></InfoWindow>}  
        </Marker>
      ))}
  </GoogleMap>
));

export default MyGoogleMap;
