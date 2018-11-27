import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {
  static propTypes = {
    car: PropTypes.object,
    carArrived: PropTypes.func,
    carDeparted: PropTypes.func
  };

  render() {
    const { car, carArrived, carDeparted } = this.props;

    return (
      <Fragment>
        <h2>Car Detail Page</h2>
        <h3>
          {car.make} {car.model}
        </h3>
        <p>Plate: {car.id}</p>
        <p>State: {car.state}</p>
        <p>Color: {car.color}</p>
        <button value={car.id} onClick={carArrived}>
          Arrived
        </button>
        <button value={car.id} onClick={carDeparted}>
          Departed
        </button>
      </Fragment>
    );
  }
}
