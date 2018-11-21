import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';

export default class Cars extends PureComponent {
  static propTypes = {
    cars: PropTypes.array.isRequired
  };

  render() {
    const { cars } = this.props;

    const carsComponents = cars.map(car => {
      return (
        <li key={car.plate}>
          <span>{car.make} {car.model}</span>
          <p>Plate Number: {car.plate}</p>

        </li>
      );
    });

    return (
      <Fragment>
        <ul>
          {carsComponents}
        </ul>
      </Fragment>
    );
  }
}
