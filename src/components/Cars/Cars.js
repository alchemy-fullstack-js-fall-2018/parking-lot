import React from 'react';
import PropTypes from 'prop-types';

const Cars = ({ cars, totalCars }) => {
  const carsList = cars.map(car => {
    return (
      <li key={car.plate}>
        {car.plate} - {car.make} - {car.model}
      </li>
    );
  });

  return (
    <div>
      <h3>{totalCars} Registered Cars:</h3>
      <ul>{carsList}</ul>
    </div>
  );
};

Cars.propTypes = {
  cars: PropTypes.array.isRequired,
  totalCars: PropTypes.number.isRequired
};

export default Cars;
