import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function SearchCars({ cars, searchTerm, updateSearchTerm }) {


  const carDetails = cars.map(car => {
    const { make, model, plate } = car;
    return (
      <tr key={plate}>
        <th>{make}</th>
        <th>{model}</th>
        <th><Link to={ROUTES.CAR_DETAIL.linkTo(plate)}>{plate}</Link></th>
      </tr>
    );
  });



  return(
    <Fragment>
      <label htmlFor="search">Search Cars by Plate</label>
        <input type="text" id="search" name="search" value={searchTerm} onChange={updateSearchTerm}/>
        {cars &&
          <table>
            <tbody>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Plate</th>
              </tr>
              {cars && carDetails}
            </tbody>
          </table>
        }
  </Fragment>
  );
}
