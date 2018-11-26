import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Car = ({ cars }) => {

  const carItems = cars.map(car => {
    return (
      <tr key={car.plate}>
        <td id="make">{car.make}</td>
        <td id="model">{car.model}</td>
        <td id="plate"><Link to={ROUTES.CAR_DETAIL.linkTo(car.plate)}>{car.plate}</Link></td>
      </tr>
    );
  });

  return (
    <Fragment>
      {carItems}
    </Fragment>
  );
};

Car.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Car;
