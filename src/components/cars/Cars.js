import React, { PureComponent, Fragment } from 'react';
import Car from './Car';
import PropTypes from 'prop-types';

export default class Cars extends PureComponent {
  static propTypes = {
    cars: PropTypes.array.isRequired
  };

  render() {
    const { cars } = this.props;

    const carsComponents = cars.map(car => {
      return (
        <Car key={car.plate}
          make={car.make}
          model={car.model}
          plate={car.plate}
        />
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
