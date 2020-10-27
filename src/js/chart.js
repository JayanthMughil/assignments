import React, { Component } from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip } from 'recharts';
import {trip} from "./data";

class VoltageChart extends Component {

    constructor (props) {
        super (props);
        this.state = {
            voltage: this.getChartData(this.props.tripDet)
        };
    }

    getChartData = (tripDet) => {
        let array = [];
        for (let i = 0; i < tripDet.batteryVoltageAdc.length; i++) {
            const obj = {
                volt: tripDet.batteryVoltageAdc[i],
                x: ""
            };
            array.push(obj);
        }
        return array;
    }

    setVoltage = () => {
        this.setState({
            voltage: this.getChartData(this.props.tripDet)
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            this.setVoltage();
        }
    }

    render () {
        return (
        <LineChart key={this.props.tripDet.tripId} width={this.props.width} height={this.props.height} data={this.state.voltage}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <YAxis dataKey="volt" domain={['auto', 'auto']} />
            <XAxis dataKey="x" label="Voltage Fluctuation" />
            <Line type="linear" dataKey="volt" stroke="#FF4545" strokeWidth={7} />
        </LineChart>
        );
    }

}

export {VoltageChart};