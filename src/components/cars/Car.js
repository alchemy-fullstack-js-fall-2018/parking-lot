import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';


const Car = ({ make, model, plate }) => {
  return (
    <li>
      <Link to={ROUTES.CAR.linkTo(plate)}>{make} - {model} - {plate}</Link>
    </li>
  );
};

Car.propTypes = {
  car: PropTypes.object
};

export default Car;
