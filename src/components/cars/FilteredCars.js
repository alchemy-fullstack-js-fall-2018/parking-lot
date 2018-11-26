import React, { Fragment } from 'react';
import styles from './FilteredCars.css';
import Cars from '../../components/cars/Cars';

export default function FilteredCars({ cars, searchTerm, updateSearchTerm }) {
  return (
    <Fragment>
      <h3 className={styles.header}>Search Cars</h3>
      <div>
        <form className={styles.form}>
          <label htmlFor="searchTerm">Search: </label>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>
      </div>
      <Cars cars={cars} />
    </Fragment>
  );
}
