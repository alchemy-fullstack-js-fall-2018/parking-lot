import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {
  static propTypes = {
    car: PropTypes.object,
    carArrived: PropTypes.func,
    carDeparted: PropTypes.func,
    lotUse: PropTypes.number
  };

  handleCarArrival = () => {
    this.props.carArrived(this.props.car);
  };

  render() {
    const { car, carDeparted, lotUse } = this.props;

    return (
      <Fragment>
        <h2>Car Detail Page</h2>
        <h3>
          {car.make} {car.model}
        </h3>
        <p>Plate: {car.id}</p>
        <p>State: {car.state}</p>
        <p>Color: {car.color}</p>
        <p>Lot Use: {lotUse}</p>
        <button onClick={this.handleCarArrival}>
          Arrived
        </button>
        <button value={car.id} onClick={carDeparted}>
          Departed
        </button>
      </Fragment>
    );
  }
}
