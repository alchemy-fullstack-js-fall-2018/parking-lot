import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Car = ({ cars }) => {

  const carDetail = cars.map(car => {
    return (
      <tr key={car.plate}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.plate}</td>
      </tr>
    );
  });

  return (
    <Fragment>
      {carDetail}
    </Fragment>
  );
};

Car.PropTypes = {
  car: PropTypes.array.isRequired,
}

export default Car;
