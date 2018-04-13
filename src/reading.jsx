import React, { Component } from 'react';
import './app.css';

class Readings extends Component {
  render() {
    let readings = [];
    readings = this.props.readings !== null ? this.props.readings : readings;

    return (
      readings.map((reading,k) => {
        return (
          <div className="Reading">
            <div className="Reading-info">
              <div className="Reading-name">{reading.variable}</div>
              <div className="Reading-followers">{reading.value}</div>
            </div>
          </div>
        )
      })
    )
  }
}

export default Readings;
