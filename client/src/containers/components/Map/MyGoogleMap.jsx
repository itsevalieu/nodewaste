import React, { Component } from 'react';
import Map from './Map.jsx'

class MyGoogleMap extends Component {
  state ={
    locations:[{
      name: 'MyFirstPlace Daycare',
      location: {
        lat: 34.0229,
        lng: -118.4694,
      },
      isOpen: false,
    },
    {
      name: 'Amalia DayCare',
      location: {
        lat: 34.0147,
        lng: -118.4650,
      },
      isOpen: false,
    },
    {
      name: 'Bright Horizons at Ocean Park',
      location: {
        lat: 34.0206,
        lng: -118.4492,
      },
      isOpen: false,
    },
    {
      name: 'Petit à Petit French Bilingual Daycare Santa Monica Day Care Garderie Crèche Francaise',
      location: {
        lat: 34.0334,
        lng: -118.4715,
      },
      isOpen: false,
    },
    {
     name: 'Cuddle Bear Day Care',
     location: {
        lat: 34.0320,
        lng: -118.4786,
      },
      isOpen: false,
    },
    {
     name: 'Sarian Family Child Care',
     location: {
        lat: 34.0369,
        lng: -118.4680,
      },
      isOpen: false,
    },
    {
     name: 'Stepping Stone Child Care and Preschool',
     location: {
        lat: 34.0183,
        lng: -118.4595,
      },
      isOpen: false,
    },
    {
     name: "Bright Horizons Children's Center at The Watergarden",
     location: {
        lat: 34.0294,
        lng: -118.4707,
      },
      isOpen: false,
    },
    {
     name: 'Bright Start Learning Center',
     location: {
        lat: 34.0252,
        lng: -118.4809,
      },
      isOpen: false,
    },
    {
     name: 'Empress Family Child Daycare',
     location: {
        lat: 34.0330,
        lng: -118.4632,
      },
      isOpen: false,
    },
    {
     name: 'Early Bird Learning Centers',
     location: {
        lat: 34.0258,
        lng: -118.4939,
      },
      isOpen: false,
    },
    {
     name: 'Ocean Park Child Care Center',
     location: {
        lat: 34.0050,
        lng: -118.4804,
      },
      isOpen: false,
    },
    {
     name: 'Lighthouse Center for Infants',
     location: {
        lat: 34.0347,
        lng: -118.4714,
      },
      isOpen: false,
    },
    {
     name: 'John Adams Child Development Center',
     location: {
        lat: 34.0144,
        lng: -118.4694,
      },
      isOpen: false,
    },
    {
     name: 'Dreamland Infant Center',
     location: {
        lat: 34.0350,
        lng: -118.4639,
      },
      isOpen: false,
    },
    {
     name: 'Gilly Bean Pre School',
     location: {
        lat: 34.0127,
        lng: -118.4647
      },
      isOpen: false,
    },
    {
     name: 'Pine Street Child Development Center',
     location: {
        lat: 34.0075,
        lng: -118.4778,
      },
      isOpen: false,
    },
    {
     name: 'Lincoln Child Development Center',
     location: {
        lat: 34.0295,
        lng: -118.4888,
      },
      isOpen: false,
    },
    {
     name: 'Les enfants',
     location: {
        lat: 34.0256,
        lng: -118.4636,
      },
      isOpen: false,
    },
    {
     name: 'Montana Preschool',
     location: {
        lat: 34.0454,
        lng: -118.4964,
      },
      isOpen: false,
    }],
    query:''
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
