import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Car = ({ cars }) => {

  const carsList = cars.map(car => {
    return (
      <li key={car.plate}>
        <Link to={ROUTES.CAR_DETAIL.linkTo(car.plate)}>{car.plate}</Link> - {car.make} - {car.model}
      </li>
    );
  });

  return (
    <Fragment>
      {carsList}
    </Fragment>
  );
};

Car.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Car;
