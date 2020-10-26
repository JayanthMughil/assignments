import React, { Component } from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip } from 'recharts';
import {trip} from "./data";

class VoltageChart extends Component {

    constructor (props) {
        super (props);
        this.state = {
            voltage: this.getChartData()
        };
    }

    getChartData = () => {
        let array = [];
        for (let i = 0; i < trip[0].batteryVoltageAdc.length; i++) {
            const obj = {
                volt: trip[0].batteryVoltageAdc[i],
                x: ""
            };
            array.push(obj);
        }
        return array;
    }

    render () {
        console.log(this.state.voltage);
        return (
        <LineChart width={this.props.width} height={this.props.height} data={this.state.voltage}>
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