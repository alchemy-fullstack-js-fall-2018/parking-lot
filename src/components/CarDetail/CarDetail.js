import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired
  };

  render() {
    const { plate, color, make, model, lotVisits, parked } = this.props.car;
    return (
      <div>
        <h3>{plate}</h3>
        <h2>{color} {make} {model}</h2>
        <h2>Lot visits: {lotVisits}</h2>
        <h2>{parked ? 'in lot' : 'not in lot' }</h2>
      </div>
    );
  }

}
