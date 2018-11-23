import React, { Fragment } from 'react';


export default function SearchCars({ updateSearchTerm, searchTerm, car }) {

  const carDetails = car.map(car => {
    return (
      <tr key={car.plate}>
        <th>{car.make}</th>
        <th>{car.model}</th>
        <th>{car.plate}</th>
      </tr>
    );
  });

  return (
    <Fragment>
      <label>Search Cars by Plate</label>
      <input type="text" value={searchTerm} onChange={updateSearchTerm}/>
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
