import React, { Fragment } from 'react';

import Cars from '../../components/cars/Cars';

export default function FilteredCars({ cars, searchTerm, updateSearchTerm }) {
  return (
    <Fragment>
      <form>
        <label htmlFor="searchTerm">Search: </label>
        <input type="text" value={searchTerm} onChange={updateSearchTerm} />
      </form>
      <Cars cars={cars} />
    </Fragment>
  );
}
