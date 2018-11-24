import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired,
    carArrives: PropTypes.func.isRequired,
    carDeparts: PropTypes.func.isRequired
  };

  render() {
    const { plate, color, make, model, lotUseCount, isInLot } = this.props.car;
    const { carArrives, carDeparts } = this.props;
    const status = isInLot ? 'Parked' : 'Absent';

    return (
      <div>
        <h2>Car Detail: {plate}</h2>
        <h3>{color} {make} {model}</h3>
        <h3>Times in lot: {lotUseCount}</h3>
        <h3>Status: {status}</h3>
        {isInLot && <button onClick={() => carDeparts(plate)}>Car has departed</button>}
        {!isInLot && <button onClick={() => carArrives(plate)}>Car has arrived</button>}
      </div>
    );
  }

}
