import React from 'react';
import PropTypes from 'prop-types';
import Car from './Car';

const Cars = ({ cars, totalCars }) => {
  const carsComponents = cars.map(car => {
    return <Car key={car.id} car={car} />;
  });

  return (
    <div>
      <h2>Total Cars: {totalCars}</h2>
      {carsComponents}
    </div>
  );
};

Cars.propTypes = {
  cars: PropTypes.array.isRequired,
  totalCars: PropTypes.number.isRequired
};

export default Cars;
