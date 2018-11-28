import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';
import PropTypes from 'prop-types';

function CarDetail({ car }) {
  if(!car) return <Redirect to={ROUTES.HOME.linkTo()} />;

  const { plate, make, model } = car;

  return (
    <div>
      <p>PLATE: { plate }</p>
      <p>MAKE: { make }</p>
      <p>MODEL: { model }</p>
      <p>In lot stuff here eventually</p>
      <button>add/remove eventually</button>
    </div>
  );
}

CarDetail.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarDetail;
