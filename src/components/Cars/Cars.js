import React from 'react';
import PropTypes from 'prop-types';
import Car from '../Car/Car';

const Cars = ({ cars }) => {

  const carItems = cars.map(car => {
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
