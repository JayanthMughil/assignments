import React, { Component } from 'react';

class Detail extends Component {

    render () {
        return (
            <>
                <div className="details">
                    <div className="detailLabel">
                        Distance : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.distance}
                    </div>
                </div>
                <div className="details">
                    <div className="detailLabel">
                        Energy : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.energy}
                    </div>
                </div>
                <div className="details">
                    <div className="detailLabel">
                        Maximum rpm : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.maxWheelRPM}
                    </div>
                </div>
                <div className="details">
                    <div className="detailLabel">
                        Minimum rpm : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.minWheelRPM}
                    </div>
                </div>
                <div className="details">
                    <div className="detailLabel">
                        Maximum speed : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.maxGpsSpeed}
                    </div>
                </div>
                <div className="details">
                    <div className="detailLabel">
                        Trip start time : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.startTime}
                    </div>
                </div>
                <div className="details">
                    <div className="detailLabel">
                        Trip end time : 
                    </div>
                    <div className="detailValue">
                        {this.props.tripDet.endTime}
                    </div>
                </div>
            </>
        );
    }

}

export {Detail};