import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import PropTypes from 'prop-types';

function CarDetail({ car, inLot, addToLot, removeFromLot, lotUsage }) {
  if(!car) return <Redirect to={ROUTES.HOME.linkTo()} />;

  const { make, model, plate } = car;
  const lotStatus = inLot ? 'Yes' : 'No';
  const buttonText = inLot ? 'Remove from Lot' : 'Add to Lot';

  const handleClick = event => {
    event.preventDefault();
    if(!inLot) {
      addToLot(make, model, plate);
    } else {
      removeFromLot(plate);
    }
  };


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
            <th>{lotStatus}</th>
            <th>{lotUsage}</th>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>{buttonText}</button>
    </Fragment>
  );
}

CarDetail.propTypes = {
  car: PropTypes.object.isRequired,
  inLot: PropTypes.bool.isRequired,
  addToLot: PropTypes.func.isRequired,
  removeFromLot: PropTypes.func.isRequired,
  lotUsage: PropTypes.number.isRequired
};

export default CarDetail;
