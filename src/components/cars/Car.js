import React from 'react';
import PropTypes from 'prop-types';

const Car = ({ car }) => {

  const { make, model, plate } = car;

  return (
    <div>
      <ul>
        <h3>{make}</h3>
        <h3>{model}</h3>
        <h3>{plate}</h3>
      </ul>
    </div>
  );
};

Car.PropTypes = {
  car: PropTypes.string.isRequired,
}

export default Car;
