import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Home() {
  return (
    <div>
      <h1>Welcome to </h1>
      <ul>
        <li>
          <Link to={ROUTES.ALL_CARS.linkTo()}>All Registered cars</Link>
        </li>
        <li>
          <Link to={ROUTES.LOT_SEARCH.linkTo()}>Search cars in the lot
          </Link>
        </li>
        <li>
          <Link to={ROUTES.ALL_LOT.linkTo()}>Display all cars in lot
          </Link>
        </li>
        <li>
          <Link to={ROUTES.CAR_DETAIL.linkTo()}>Car Details
          </Link>
        </li>
        <li>
          <Link to={ROUTES.CAR_SEARCH.linkTo()}>Car Search
          </Link>
        </li>
        <li>
          <Link to={ROUTES.REGISTER.linkTo()}>Register a car
          </Link>
        </li>
      </ul>
    </div>
  );
};
