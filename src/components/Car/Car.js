import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';


const Car = ({ car }) => {
  const { plate, make, model, color } = car;
  return (
    <div>
      <Link key={plate} to={ROUTES.CAR.linkTo(plate)}>{plate}</Link>
      <p> {color} {make} {model} </p>
    </div>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired
};

export default Car;
