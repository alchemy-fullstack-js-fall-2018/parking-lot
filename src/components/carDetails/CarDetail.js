import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';

const carDetail = ({ car, inLot, lotCarArrived, lotCarDeparted, lotUsage }) => {

  const { make, model, plate } = car;

  const handleClick = event => {
    event.preventDefault();
    if(!inLot) lotCarArrived(car)
    else lotCarDeparted(plate)
  }

  console.log(inLot);
  const status = inLot ? 'Yes' : 'No';
  const addRemoveButton = inLot ? 'Remove' : 'Add';

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

carDetail.propTypes = {
  car: PropTypes.object.isRequired,
  inLot: PropTypes.bool.isRequired,
  lotCarArrived: PropTypes.func.isRequired,
  lotCarDeparted: PropTypes.func.isRequired,
  lotUsage: PropTypes.number.isRequired
}

export default carDetail;
