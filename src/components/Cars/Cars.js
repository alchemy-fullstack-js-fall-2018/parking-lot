import React from 'react';
import PropTypes from 'prop-types';
import Car from '../Car/Car'

const Cars = ({ cars }) => {

  const carItems = cars.map(car => {
    // return <li key={car.plate}>{car.plate}: {car.color} {car.make} {car.model}</li>;
    return <Car key={car.plate} car={car} />;
  });

  return (
    <div>
      <h3>Cars!!</h3>
      <ul>
        {carItems}
      </ul>
    </div>
  );
};

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Cars;
