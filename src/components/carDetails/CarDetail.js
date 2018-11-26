import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';

const carDetail = ({ car, inLot, addToLot, removeFromLot, lotUsage }) => {

  const { make, model, plate } = car;

  const handleClick = event => {
    event.preventDefault();
    if(!inLot) addToLot(car)
    else removeFromLot(plate)
  }

  const status = inLot ? 'Yes' : 'No';
  const addRemoveButton = inlot ? 'Remove' : 'Add';

  return(
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Plate</th>
            <th>In Lot:</th>
            <th>Lot Usage:</th>
            <th>Add or remove from lot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{make}</th>
            <th>{model}</th>
            <th>{plate}</th>
            <th>{status}</th>
            <th>{lotUsage}</th>
            <th>
              <button onClick={handleClick}>{addRemoveButton}</button>
            </th>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

carDetail.PropTypes = {
  car: PropTypes.object.isRequired,
  inLot: PropTypes.bool.isRequired,
  lotUsage: PropTypes.number.isRequired
}

export default carDetail;
