import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

// export default function CarDetail({ car, lot, lotUse }) {
function CarDetail({ car }) {
  // const inLot = lot.inLot ? 'Yes' : 'No';
  if(!car) return <Redirect to={ROUTES.HOME.linkTo()} />;
  
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
            <th>{car.make}</th>
            <th>{car.model}</th>
            <th>{car.plate}</th>
            {/* <th>{inLot}</th> */}
            {/* <th>{lotUse.timesInLot}</th> */}
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default CarDetail;
