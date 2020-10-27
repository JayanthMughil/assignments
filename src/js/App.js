import React, { Component } from 'react';
import {Map} from "./map";
import {VoltageChart} from "./chart";
import {Vehicle} from "./dropDowns";
import {trip} from "./data";
import {Detail} from "./details";
import '../style/App.css';

class App extends Component {

  constructor (props) {
    super (props);
    this.chartWrapRef = React.createRef();
    this.mapWrapRef = React.createRef();
    this.state = {
      chartWidth: 0,
      chartHeight: 0,
      mapHeight: 0,
      mapWidth: 0,
      isLoaded: false
    }
  }

  componentDidMount = () => {
    this.setState({
      chartHeight: this.chartWrapRef.current.clientHeight,
      chartWidth: this.chartWrapRef.current.clientWidth,
      mapWidth: this.mapWrapRef.current.clientWidth,
      mapHeight: this.mapWrapRef.current.clientHeight,
      isLoaded: true
    });
  }

  setTrip = (veh, tripd) => {
    this.setState({
      tripDetails: trip.filter(tr => tr.vin === veh && tr.tripId === tripd)
    });
  }

  render () {
    return (
      <div className="bodyWrapper">
        <div className="chartsWrapper">
          <div className="dropDownWrapper">
            <Vehicle setTrip={this.setTrip} />
          </div>
          <div className="locationChart">
            <div className="mapWrapper" ref={this.mapWrapRef}>
              {this.state.isLoaded && this.state.tripDetails ?
               <Map tripDet={this.state.tripDetails[0]} width={this.state.mapWidth} height={this.state.mapHeight}/> : ""}
            </div>
          </div>
          <div className="voltageChart">
            <div className="chartWrap" ref={this.chartWrapRef}>
              {this.state.isLoaded && this.state.tripDetails ? 
                <VoltageChart tripDet={this.state.tripDetails[0]} width={this.state.chartWidth} height={this.state.chartHeight} /> : ""}
            </div>
          </div>
        </div>
        <div className="detailWrapper">
                {this.state.isLoaded && this.state.tripDetails ?
                <Detail tripDet={this.state.tripDetails[0]} key={this.state.tripDetails[0].tripId} /> : ""}
        </div>
      </div>
    );
  }

}

export {App};
