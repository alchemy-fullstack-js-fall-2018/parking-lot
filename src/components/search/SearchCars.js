import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';


export default function SearchCars({ updateSearchTerm, searchTerm, car }) {


  const carDetails = car.map(car => {
    const { make, model, plate } = car;
    return (
      <tr key={plate}>
        <th>{make}</th>
        <th>{model}</th>
        <th><Link to={ROUTES.CAR_DETAIL.linkTo(plate)}>{plate}</Link></th>
      </tr>
    );
  });

  return (
    <Fragment>
      <label htmlFor="search">Search Cars by Plate</label>
      <input type="text" id="search" name="search" value={searchTerm} onChange={updateSearchTerm}/>
      {car &&
        <table width="100%">
          <tbody>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Plate</th>
            </tr>
            {car && carDetails}
          </tbody>
        </table>
      }



    </Fragment>
  );
}
