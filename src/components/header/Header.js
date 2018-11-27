import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={ROUTES.CARS.linkTo()}>All Cars</Link>
        <Link to={ROUTES.CARS_SEARCH.linkTo()}>Car Search</Link>
        <Link to={ROUTES.REGISTER_CAR.linkTo()}>Register Car</Link>
      </nav>
    </header>
  );
}
