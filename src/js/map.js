import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Polyline } from "react-google-maps";

const MapComponent = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
        key={props.id}
        defaultZoom={20}
        defaultCenter={props.path.length !== 0 ? props.path[props.path.length/2] : {
        "lat": 12.9043522,
        "lng": 77.6007214
        }}
        ref={props.onMapMounted}
      >
        {props.path.length !== 0 ? <Polyline key={props.id} path={props.path} options={{ strokeColor: "#0695FF ", strokeWeight: 7 }} /> : ""}
      </GoogleMap>
    );
}));

class Map extends Component {

    constructor (props) {
        super(props);
        this.state = {
            path: this.props.tripDet.location
        };
    }

    setPath = () => {
        console.log(this.props.tripDet.location);
        this.setState({
            path: this.props.tripDet.location
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            this.setPath();
        }
    }

    handleMapMounted = (map) => {
        this._map = map
        if (map) {
          const bounds = new window.google.maps.LatLngBounds()
    
          this.state.path.map(position => {
            bounds.extend(position)
          })
          
          this._map.fitBounds(bounds)
       
        }
      }

    render () {
        return (
            <MapComponent 
            key = {this.props.tripDet.tripId}
            id = {this.props.tripDet.tripId}
            path = {this.state.path}
            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement = {<div style={{ height: `100%` }} />}
            containerElement = {<div style={{ height: this.props.height }} />}
            mapElement = {<div style={{ height: `100%` }} />}
            onMapMounted = {this.handleMapMounted}
            />
        );
    }

}

export {Map};