import React, { Fragment } from 'react';
import Cars from '../Cars/Cars';


export default function SearchCars({ updateSearchTerm, searchTerm, filteredCars }) {

  return (
    <Fragment>
      <label htmlFor="search">Search Cars</label>
      <input type="text" id="search" name="search" value={searchTerm} onChange={updateSearchTerm}/>
      <Cars cars={filteredCars} />
    </Fragment>
  );
}
