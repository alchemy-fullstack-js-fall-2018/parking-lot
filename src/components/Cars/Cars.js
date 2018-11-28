import React from 'react';
import PropTypes from 'prop-types';
import Car from './car';

const Cars = ({ cars, totalCars }) => {

  return (
    <div>
      <h3>{totalCars} Registered Cars:</h3>
      <ul><Car cars={cars} /></ul>
    </div>
  );
};

Cars.propTypes = {
  cars: PropTypes.array.isRequired,
  totalCars: PropTypes.number.isRequired
};

export default Cars;
