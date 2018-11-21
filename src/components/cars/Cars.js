import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

const Car = ({ make, model, plate }) => {
  return (
    <Fragment>
      <h3>{make}</h3>
      <h4>{model}</h4>
      <p>{plate}</p>
    </Fragment>
  );
};
export default function Cars({ cars }) {
  console.log(cars);
  return (
    <Fragment>
      {cars.map(car => <Car key={car.model} make={car.make} model={car.model} plate={car.plate}/>)}
    </Fragment>
  );
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};
