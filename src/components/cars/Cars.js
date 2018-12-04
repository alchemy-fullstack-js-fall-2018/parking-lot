import React from 'react';
import PropTypes from 'prop-types';
import Car from './Car';
import styles from './Cars.css';

const Cars = ({ cars }) => {

  const carDetail = cars.map(car => {
    return <Car key={car.plate} car={car} />
  });
  return (
    (
      <table className={styles.car}>
        <thead>
          <tr>
              <th>plate</th>
              <th>make</th>
              <th>model</th>
          </tr>
        </thead>
        <tbody>
          {carDetail}
        </tbody>
      </table>)
  )
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Cars;
