import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Car = ({ cars }) => {

  const carItems = cars.map(car => {
    return (
      <tr key={car.plate}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.plate}</td>
      </tr>
    );
    // <li key={car.plate}>Make: {car.make} Model: {car.model} Plate: {car.plate}</li>;
  });

  return (
    <Fragment>
      {carItems}
    </Fragment>
  );
};

Car.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Car;
