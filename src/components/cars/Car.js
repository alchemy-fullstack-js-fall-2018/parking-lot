import React, { Fragment } from 'react';
import ROUTES from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Car({ car }) {
  return (
    <Fragment>
      <Link to={ROUTES.CAR_DETAIL.linkTo(car.id)}>
        {car.make} {car.model}
      </Link>
      <p>Plate: {car.id}</p>
      <p>State: {car.state}</p>
      <p>Color: {car.color}</p>
    </Fragment>
  );
}
