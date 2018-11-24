import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';


export default function Header() {
  return (
    <header>
      <nav>
        <Link to={ROUTES.REGISTER_CAR.linkTo()}>Register Car</Link>
        <Link to={ROUTES.SEARCH_CARS.linkTo()}>Search All Cars</Link>
        <Link to={ROUTES.SEARCH_LOT_CARS.linkTo()}>Search Cars in Lot</Link>
      </nav>
      <h1>City Center Parking</h1>
    </header>
  );
}
