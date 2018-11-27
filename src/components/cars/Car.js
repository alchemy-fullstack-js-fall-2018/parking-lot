import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

const Car = ({ car }) => {

  return (
    <tr key={car.plate}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        {/* <Link to={ROUTES.CAR_DETAIL.linkTo(plate)}></Link> */}
        <td>{car.plate}</td>
      </tr>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired,
}

export default Car;
