import React, { Component } from 'react';

class Vehicle extends Component {

    render () {
        return (
            <>
                <div className="dropdownWrap">
                    <div className="drop">
                        <label>Vehicle: </label>
                        <input readonly type="text" value="" readonly = "readonly" />
                    </div>
                    <div className="drop">
                        <label>Trip: </label>
                        <input readonly type="text" value="" readonly = "readonly" />
                    </div>
                </div>
            </>
        );
    }

}

export {Vehicle};