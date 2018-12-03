import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES }  from '../../routes';

const Car = ({ car }) => {

  return (
    <Fragment>
      <tr key={car.plate}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        {/* <Link to={ROUTES.CAR_DETAIL.linkTo(car.plate)}></Link> */}
        <td>{car.plate}</td>
      </tr>
    </Fragment>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired,
}

export default Car;
