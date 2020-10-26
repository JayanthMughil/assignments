import React, { Component } from 'react';
import {Map} from "./map";
import {VoltageChart} from "./chart";
import {Vehicle} from "./dropDowns";
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

  render () {
    return (
      <div className="bodyWrapper">
        <div className="chartsWrapper">
          <div className="dropDownWrapper">
            <Vehicle />
          </div>
          <div className="locationChart">
            <div className="mapWrapper" ref={this.mapWrapRef}>
              {this.state.isLoaded ? <Map width={this.state.mapWidth} height={this.state.mapHeight}/> : ""}
            </div>
          </div>
          <div className="voltageChart">
            <div className="chartWrap" ref={this.chartWrapRef}>
              {this.state.isLoaded ? <VoltageChart width={this.state.chartWidth} height={this.state.chartHeight} /> : ""}
            </div>
          </div>
        </div>
        <div className="detailWrapper">

        </div>
      </div>
    );
  }

}

export {App};
