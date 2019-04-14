import React, { Component } from 'react';
import Map from './Map.jsx'

class MyGoogleMap extends Component {
  state ={
    locations:[{
      name: 'MyFirstPlace Daycare',
      address: '1931 22nd St, Santa Monica, CA 90404',
      location: {
        lat: 34.0229,
        lng: -118.4694,
      },
      isOpen: false,
    },
    {
      name: 'Amalia DayCare',
      address: '2503 20th St, Santa Monica, CA 90405',
      location: {
        lat: 34.0147,
        lng: -118.4650,
      },
      isOpen: false,
    },
    {
      name: 'Petit à Petit French Bilingual Daycare Santa Monica Day Care Garderie Crèche Francaise',
      address: '1452 Harvard St, Santa Monica, CA 90404',
      location: {
        lat: 34.0334,
        lng: -118.4715,
      },
      isOpen: false,
    },
    {
     name: 'Sarian Family Child Care',
     address: '1434 Franklin St B, Santa Monica, CA 90404',
     location: {
        lat: 34.0369,
        lng: -118.4680,
      },
      isOpen: false,
    },
    {
     name: 'Stepping Stone Child Care and Preschool',
     address: '2527 25th St, Santa Monica, CA 90405',
     location: {
        lat: 34.0183,
        lng: -118.4595,
      },
      isOpen: false,
    },
    {
     name: 'Bright Start Learning Center',
     address: '1501 17th St, Santa Monica, CA 90404',
     location: {
        lat: 34.0252,
        lng: -118.4809,
      },
      isOpen: false,
    },
    {
     name: 'Empress Family Child Daycare',
     address: '1736 Franklin St # B, Santa Monica, CA 90404',
     location: {
        lat: 34.0330,
        lng: -118.4632,
      },
      isOpen: false,
    },
    {
     name: 'Early Bird Learning Centers',
     address: '1019 California Ave, Santa Monica, CA 90403',
     location: {
        lat: 34.0258,
        lng: -118.4939,
      },
      isOpen: false,
    },
    {
     name: 'Ocean Park Child Care Center',
     address: 'Santa Monica, CA 90405',
     location: {
        lat: 34.0050,
        lng: -118.4804,
      },
      isOpen: false,
    },
    {
     name: 'Lighthouse Center for Infants',
     address: '1424 Yale St, Santa Monica, CA 90404',
     location: {
        lat: 34.0347,
        lng: -118.4714,
      },
      isOpen: false,
    }],
    query:'',

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
    const { query, locations } = this.state

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
      <div className="MyGoogleMap">
        <Map
          onToggle={this.onToggleOpen}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJMqSSgQ9npfcAZ9hmcOJynEbB6h1BOEc&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `95vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          className="googlemap"
          markers={locations}
        />
      </div>
    );
  }
}

export default MyGoogleMap;
