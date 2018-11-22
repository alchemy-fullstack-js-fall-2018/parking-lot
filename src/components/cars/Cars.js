import React from 'react';
import PropTypes from 'prop-types';
import Car from './Car';

function Cars({ cars }) {

  return (
    <table width="100%">
      <tbody>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Plate</th>
        </tr>
        <Car cars={cars} />
      </tbody>
    </table>
  );
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Cars;
