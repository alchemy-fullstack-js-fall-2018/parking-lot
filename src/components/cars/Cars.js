import React from 'react';
import PropTypes from 'prop-types';
import Car from './Car';

const Cars = ({ cars }) => {
  return (
    <table>
      <thead>
        <th>Make</th>
        <th>model</th>
        <th>Plate</th>
      </thead>
      <tbody>
        <Car Cars={cars} />
      </tbody>
    </table>
  );
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Cars;
