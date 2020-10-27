import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { trip } from "./data";

class Vehicle extends Component {

    constructor (props) {
        super(props);
        this.vehRef = React.createRef();
        this.tripRef = React.createRef();
        this.vehNames = this.getVehicleNames();
        this.state = {
            isLoaded: false,
            vehDrop: false,
            tripDrop: false,
            selectedVeh: this.vehNames[0],
            trips: this.getDefaultTrips(),
            selectedTrip: this.getDefaultTrips()[0],
        };
    }

    getVehicleNames = () => {
        let array = [];
        for (let i = 0; i < trip.length; i++) {
            if (!array.includes(trip[i].vin)) {
                array.push(trip[i].vin);
            }
        }
        return array;
    }

    getDefaultTrips = () => {
        let array = [];
        for (let i = 0; i < trip.length; i++) {
            if (!array.includes(trip[i].tripId) && trip[i].vin === this.vehNames[0]) {
                array.push(trip[i].tripId);
            }
        }
        return array;
    }

    componentDidMount = () => {
        this.setState({
            isLoaded: true
        });
    }

    openVehDrop = () => {
        this.setState({
            vehDrop: true
        });
    }

    openTripDrop = () => {
        this.setState({
            tripDrop: true
        });
    }

    closeDrop = () => {
        this.setState({
            vehDrop: false,
            tripDrop: false
        });
    }

    getTripArray = (name) => {
        let array = [];
        for (let i = 0; i < trip.length; i++) {
            if (!array.includes(trip[i].tripId) && trip[i].vin === name) {
                array.push(trip[i].tripId);
            }
        }
        return array;
    }

    handleVehSelection = (event) => {
        if (event.target.getAttribute("value") !== this.state.selectedVeh) {
            const tripArray = this.getTripArray(event.target.getAttribute("value"));
            this.setState({
                selectedVeh: event.target.getAttribute("value"),
                trips: tripArray,
                selectedTrip: tripArray[0]
            });

        }
        this.closeDrop();
    }

    handleTripSelection = (event) => {
        this.setState({
            selectedTrip: event.target.getAttribute("value")
        });
        this.closeDrop();
    }

    render () {
        return (
            <>
                <div className="dropdownWrap">
                    <div className="drop">
                        <label>Vehicle: </label>
                        <input ref={this.vehRef} onClick={this.openVehDrop} value={this.state.selectedVeh} type="text" readonly = "readonly" />
                    </div>
                    <div className="drop">
                        <label>Trip: </label>
                        <input type="text" ref={this.tripRef} value={this.state.selectedTrip} onClick={this.openTripDrop} readonly = "readonly" />
                    </div>
                </div>
                {this.state.isLoaded ?
                <>
                    <Menu
                        id="vehicle-menu"
                        anchorEl={this.vehRef.current}
                        keepMounted
                        open={this.state.vehDrop}
                        onClose={this.closeDrop}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        elevation={0}
                        getContentAnchorEl={null}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        {this.vehNames.map((veh, index) => {
                            return (
                                <div key={veh} style={{width: this.vehRef.current.clientWidth}}>
                                    <MenuItem value={veh} onClick={this.handleVehSelection}>{veh}</MenuItem>
                                </div>
                            );
                        })}
                    </Menu>
                    <Menu
                        id="vehicle-menu"
                        anchorEl={this.tripRef.current}
                        keepMounted
                        open={this.state.tripDrop}
                        onClose={this.closeDrop}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        elevation={0}
                        getContentAnchorEl={null}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        {this.state.trips.map((trip, index) => {
                            return (
                                <div key={trip} style={{width: this.tripRef.current.clientWidth}}>
                                    <MenuItem value={trip} onClick={this.handleTripSelection}>{trip}</MenuItem>
                                </div>
                            );
                        })}
                    </Menu>
                </> : ""}
            </>
        );
    }

}

export {Vehicle};