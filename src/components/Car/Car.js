import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';


const Car = ({ car }) => {
  const { plate, make, model, color } = car;
  return (
    <div>
      <p><Link to={ROUTES.CAR.linkTo(plate)}>{plate}</Link>: {color} {make} {model} </p>
    </div>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired
};

export default Car;
