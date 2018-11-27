import React, { Fragment } from 'react';
import Cars from './Cars';

const CarsSearch = ({ cars, searchTerm, updateSearchTerm, totalCars }) => {
  return (
    <Fragment>
      <p>search page</p>
      <input value={searchTerm} onChange={updateSearchTerm} />
      <Cars cars={cars} totalCars={totalCars} />
    </Fragment>
  );
};

export default CarsSearch;
