import React, { Component } from 'react';
import {  GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import CampaignItem from './CampaignItem';
import MyGoogleMap from '../Map/MyGoogleMap';
import './CampaignInfo.css';

class CampaignInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
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
            }
        }
    }
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: 34.0229, lng: -118.4694 }}
                defaultOptions={{
                    streetViewControl: false,
                    scaleControl: false,
                    mapTypeControl: false,
                    panControl: true,
                    zoomControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    scrollwheel: false
                }}> 
                {props.isMarkerShown && <Marker position={{lat: 34.0229, lng: -118.4694 }} icon="http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png"/>}
            </GoogleMap>
        ));
           
        return(
            <div className='campaign__details'>
                <CampaignItem location={this.state.location}/>
                <div>
                    <MyMapComponent 
                        isMarkerShown 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJMqSSgQ9npfcAZ9hmcOJynEbB6h1BOEc&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `300px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className='campaign__buttons'>
                    <a href={this.state.location.link}><button className='direction'>Direction</button></a>
                    <br/>
                    <a href='/camera'><button className='scan'>Scan QR Code</button></a>
                </div>
            </div>
        );
    }
}

export default CampaignInfo;
