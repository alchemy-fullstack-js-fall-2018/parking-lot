import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import PropTypes from 'prop-types';

// export default function CarDetail({ car, lot, lotUse }) {
function CarDetail({ car, inLot, addToLot, removeFromLot }) {
  if(!car) return <Redirect to={ROUTES.HOME.linkTo()} />;

  const handleClick = event => {
    event.preventDefault();
    if(!inLot) {
      addToLot(car.plate);
    } else {
      removeFromLot(car.plate);
    }
  };

  const lotStatus = inLot ? 'Yes' : 'No';
  const buttonText = inLot ? 'Remove from Lot' : 'Add to Lot';

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
            <th>{lotStatus}</th>
            {/* <th>{lotUse.timesInLot}</th> */}
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>{buttonText}</button>
    </Fragment>
  );
}

CarDetail.propTypes = {
  car: PropTypes.object.isRequired,
  inLot: PropTypes.bool.isRequired
};

export default CarDetail;
