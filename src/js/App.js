import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {

  render () {
    return (
      <div className="bodyWrapper">
        <div className="chartsWrapper">
          <div className="locationChart">

          </div>
          <div className="voltageChart">

          </div>
        </div>
        <div className="detailWrapper">

        </div>
      </div>
    );
  }

}

export {App};
