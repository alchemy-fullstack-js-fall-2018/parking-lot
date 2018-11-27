import React, { Fragment } from 'react';
import Cars from './Cars';

const CarsSearch = ({ cars, searchTerm, updateSearchTerm, totalCars }) => {
  return (
    <Fragment>
      <h2>Search for Car By Plate</h2>
      <input value={searchTerm} onChange={updateSearchTerm} />
      <Cars cars={cars} totalCars={totalCars} />
    </Fragment>
  );
};

export default CarsSearch;
