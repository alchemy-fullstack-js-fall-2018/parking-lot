import React, { Fragment } from 'react';
import styles from './Cars.css';

import PropTypes from 'prop-types';

const Car = ({ make, model, plate }) => {
  return (
    <Fragment>
      <div>
        <h3>{make}</h3>
        <h4>{model}</h4>
        <p>{plate}</p>
      </div>
    </Fragment>
  );
};
export default function Cars({ cars }) {
  return (
    <Fragment>
      <div className={styles.container}>
        {cars.map(car => <Car key={car.plate} make={car.make} model={car.model} plate={car.plate}/>)}
      </div>
    </Fragment>
  );
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};
