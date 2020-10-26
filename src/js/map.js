import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Polyline } from "react-google-maps";
import { trip } from "./data";

const MapComponent = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
        defaultZoom={20}
        defaultCenter={props.path[props.path.length/2]}
      >
        <Polyline path={props.path} options={{ strokeColor: "#0695FF ", strokeWeight: 7 }} />
      </GoogleMap>
    );
}));

class Map extends Component {

    constructor (props) {
        super(props);
        this.state = {
            path: trip[0].location
        };
    }



    render () {
        return (
            <MapComponent 
            path = {this.state.path}
            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement = {<div style={{ height: `100%` }} />}
            containerElement = {<div style={{ height: this.props.height }} />}
            mapElement = {<div style={{ height: `100%` }} />}
            />
        );
    }

}

export {Map};