import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Car = ({ cars }) => {

  const carsList = cars.map(car => {
    return (
      <li key={car.plate}>
        {car.plate} - {car.make} - {car.model}
      </li>
    );
  });

  return (
    <Fragment>
      {carsList}
    </Fragment>
  );
};

Car.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Car;
