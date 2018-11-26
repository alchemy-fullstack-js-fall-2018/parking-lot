import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Car = ({ cars }) => {

  const carDetail = cars.map(car => {
    return (
      <tr key={car.plate}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <Link to={ROUTES.CAR_DETAIL.linkTo(plate)}></Link><td>{car.plate}</td>
      </tr>
    );
  });

  return (
    <Fragment>
      {carDetail}
    </Fragment>
  );
};

Car.PropTypes = {
  car: PropTypes.array.isRequired,
}

export default Car;
