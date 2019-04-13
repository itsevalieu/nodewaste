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
  long: -118.4694,
  isOpen: false,
},
{
  name: 'Amalia DayCare',
  lat: 34.0147,
  long: -118.4650,
  isOpen: false,
},
{
  name: 'Bright Horizons at Ocean Park',
  lat: 34.0206,
  long: -118.4492,
  isOpen: false,
},
{
  name: 'Petit à Petit French Bilingual Daycare Santa Monica Day Care Garderie Crèche Francaise',
  lat: 34.0334,
  long: -118.4715,
  isOpen: false,
},
{
 name: 'Cuddle Bear Day Care',
  lat: 34.0320,
  long: -118.4786,
  isOpen: false,
},
{
 name: 'Sarian Family Child Care',
  lat: 34.0369,
  long: -118.4680,
  isOpen: false,
},
{
 name: 'Stepping Stone Child Care and Preschool',
  lat: 34.0183,
  long: -118.4595,
  isOpen: false,
},
{
 name: "Bright Horizons Children's Center at The Watergarden",
  lat: 34.0294,
  long: -118.4707,
  isOpen: false,
},
{
 name: 'Bright Start Learning Center',
  lat: 34.0252,
  long: -118.4809,
  isOpen: false,
},
{
 name: 'Empress Family Child Daycare',
  lat: 34.0330,
  long: -118.4632,
  isOpen: false,
},
{
 name: 'Early Bird Learning Centers',
  lat: 34.0258,
  long: -118.4939,
  isOpen: false,
},
{
 name: 'Ocean Park Child Care Center',
  lat: 34.0050,
  long: -118.4804,
  isOpen: false,
},
{
 name: 'Lighthouse Center for Infants',
  lat: 34.0347,
  long: -118.4714,
  isOpen: false,
},
{
 name: 'John Adams Child Development Center',
  lat: 34.0144,
  long: -118.4694,
  isOpen: false,
},
{
 name: 'Dreamland Infant Center',
  lat: 34.0350,
  long: -118.4639,
  isOpen: false,
},
{
 name: 'Gilly Bean Pre School',
  lat: 34.0127,
  long: -118.4647
},
{
 name: 'Pine Street Child Development Center',
  lat: 34.0075,
  long: -118.4778,
  isOpen: false,
},
{
 name: 'Lincoln Child Development Center',
  lat: 34.0295,
  long: -118.4888,
  isOpen: false,
},
{
 name: 'Les enfants',
  lat: 34.0256,
  long: -118.4636,
  isOpen: false,
},
{
 name: 'Montana Preschool',
  lat: 34.0454,
  long: -118.4964,
  isOpen: false,
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
      {campaigns.map((campaign, index) => (
        <Marker key={index} position={ {lat: campaign.lat, lng: campaign.long} } onClick={props.onToggleOpen}>
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}><div>{campaign.name}</div></InfoWindow>}
        </Marker>
      ))}
  </GoogleMap>
));

export default MyGoogleMap;
