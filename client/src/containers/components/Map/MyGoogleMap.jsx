import React, { Component } from 'react';
import Map from './Map.jsx'
import './MyGoogleMap.css';

class MyGoogleMap extends Component {
  state ={
    locations:[{
      name: 'MyFirstPlace Daycare',
      address: '1931 22nd St, Santa Monica, CA 90404',
      link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/1931+22nd+St,+Santa+Monica,+CA+90404/@34.0235016,-118.4808422,16z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb3b5dbe7ea5:0x62e1a12586a77d34!2m2!1d-118.4693566!2d34.0228668!3e0',
      type: 'AHP Recycle',
      dist: '1.1 miles',
      location: {
        lat: 34.0229,
        lng: -118.4694,
      },
      isOpen: false,
    },
    {
      name: 'Amalia DayCare',
      address: '2503 20th St, Santa Monica, CA 90405',
      link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/2503+20th+St,+Santa+Monica,+CA+90405/@34.0209492,-118.4787207,16z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb204e44ae59:0x179e60806d51d0db!2m2!1d-118.4651135!2d34.0146569!3e0',
      type: 'AHP Recycle', 
      dist: '1.6 miles',
      location: {
        lat: 34.0147,
        lng: -118.4650,
      },
      isOpen: false,
    },
    {
      name: 'Petit à Petit French Bilingual Daycare Santa Monica Day Care Garderie Crèche Francaise',
      address: '1452 Harvard St, Santa Monica, CA 90404',
      link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/1452+Harvard+St,+Santa+Monica,+CA+90404/@34.0291373,-118.4814899,16z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb47066c5153:0x73354ce88234026b!2m2!1d-118.4715009!2d34.0334022!3e0',
      type: 'AHP Recycle',
      dist: '1.0 miles',
      location: {
        lat: 34.0334,
        lng: -118.4715,
      },
      isOpen: false,
    },
    {
     name: 'Sarian Family Child Care',
     address: '1434 Franklin St B, Santa Monica, CA 90404',
     link: '1434 Franklin St B, Santa Monica, CA 90404',
     type: 'AHP Recycle',
     dist: '1.4 miles',
     location: {
        lat: 34.0369,
        lng: -118.4680,
      },
      isOpen: false,
    },
    {
     name: 'Stepping Stone Child Care and Preschool',
     address: '2527 25th St, Santa Monica, CA 90405',
     link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/2527+25th+St,+Santa+Monica,+CA+90405/@34.0240106,-118.480337,15z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb1eda5c07fb:0xd9dcb98c036b7272!2m2!1d-118.4595914!2d34.0182837!3e0',
     type: 'AHP Recycle',
     dist: '1.9 miles',
     location: {
        lat: 34.0183,
        lng: -118.4595,
      },
      isOpen: false,
    },
    {
     name: 'Bright Start Learning Center',
     address: '1501 17th St, Santa Monica, CA 90404',
     link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/1501+17th+St,+Santa+Monica,+CA+90404/@34.0242882,-118.4844582,17z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb341f45bbfb:0x72ab554ed9136f69!2m2!1d-118.480966!2d34.025048!3e0',
     type: 'AHP Recycle',
     dist: '0.2 miles',
     location: {
        lat: 34.0252,
        lng: -118.4809,
      },
      isOpen: false,
    },
    {
     name: 'Empress Family Child Daycare',
     address: '1736 Franklin St # B, Santa Monica, CA 90404',
     link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/1736+Franklin+St+B,+Santa+Monica,+CA+90404/@34.0307117,-118.4783064,16z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb3ffc5439e7:0x214d4f13c20806fe!2m2!1d-118.4632429!2d34.0330003!3e0',
     type: 'AHP Recycle',
     dist: '1.6 miles',
     location: {
        lat: 34.0330,
        lng: -118.4632,
      },
      isOpen: false,
    },
    {
     name: 'Early Bird Learning Centers',
     address: '1019 California Ave, Santa Monica, CA 90403',
     link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/1019+California+Ave,+Santa+Monica,+CA+90403/@34.0243215,-118.4929581,16z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2a4b620964131:0x62cb9893e6a9aee!2m2!1d-118.4939423!2d34.0257608!3e0',
     type: 'AHP Recycle',
     dist: '0.9 miles',
     location: {
        lat: 34.0258,
        lng: -118.4939,
      },
      isOpen: false,
    },
    {
     name: 'Ocean Park Child Care Center',
     address: 'Santa Monica, CA 90405',
     link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/Ocean+Park+Child+Care+Center,+Santa+Monica,+CA/@34.0141932,-118.4873834,15z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bad69efe6aad:0xd341026f31f69f0f!2m2!1d-118.4803572!2d34.0050105!3e0',
     type: 'AHP Recycle',
     dist: '1.9 miles',
     location: {
        lat: 34.0050,
        lng: -118.4804,
      },
      isOpen: false,
    },
    {
     name: 'Lighthouse Center for Infants',
     address: '1424 Yale St, Santa Monica, CA 90404',
     link: 'https://www.google.com/maps/dir/34.023554,++-118.483395/Lighthouse+Center+for+Infants,+1424+Yale+St,+Santa+Monica,+CA+90404/@34.0295588,-118.4814899,16z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-118.483395!2d34.023554!1m5!1m1!1s0x80c2bb46f0c75e27:0x9ef52a3ea73dda32!2m2!1d-118.4713697!2d34.0346954!3e0',
     type: 'AHP Recycle',
     dist: '1.2 miles',
     location: {
        lat: 34.0347,
        lng: -118.4714,
      },
      isOpen: false,
    }],

  }
  onToggleOpen = (location) => {
    console.log('clicked');
    console.log(location);
    this.state.locations.forEach((notLocation) => {
      notLocation.isOpen = false;
      this.setState(notLocation);
    });
    location.isOpen = !location.isOpen;
    this.setState(location);
    console.log(this);
    console.log(location);
  }

  //{ isOpen: !this.isOpen }

  // updateQuery = (query) => {
  //   this.setState({ query: query.trim() })
  //   console.log(query)
  // }

  render() {
    const { locations } = this.state;

    // let filteredMarkers
    // if(query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   filteredMarkers = locations.filter((location) => match.test(location.name))
    // }else {
    //   filteredMarkers = locations
    // }
    //
    // filteredMarkers.sort(sortBy('name'))

    return (
      <div className="map">
        <Map
          onToggle={this.onToggleOpen}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJMqSSgQ9npfcAZ9hmcOJynEbB6h1BOEc&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `78.5vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={locations}
        />
      </div>
    );
  }
}

export default MyGoogleMap;
