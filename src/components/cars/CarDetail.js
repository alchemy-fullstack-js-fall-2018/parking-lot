import React, { Fragment } from 'react';

// export default function CarDetail({ car, lot, lotUse }) {
function CarDetail({ car }) {
  // const inLot = lot.inLot ? 'Yes' : 'No';
  const { make, model, plate } = car[0];
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
          <tr>
            <th>{make}</th>
            <th>{model}</th>
            <th>{plate}</th>
            {/* <th>{inLot}</th> */}
            {/* <th>{lotUse.timesInLot}</th> */}
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default CarDetail;
