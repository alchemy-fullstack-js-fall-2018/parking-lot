import React, { Fragment } from 'react';

// export default function CarDetail({ car, lot, lotUse }) {
function CarDetail({ car }) {
  // const inLot = lot.inLot ? 'Yes' : 'No';

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
      <table width="100%">
        <tbody>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Plate</th>
            <th>In Lot Now</th>
            <th>Times Used</th>
          </tr>
          {/* <tr> */}
          {carDetails}
          {/* <th>{inLot}</th> */}
          {/* <th>{lotUse.timesInLot}</th> */}
          {/* </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
}

export default CarDetail;
