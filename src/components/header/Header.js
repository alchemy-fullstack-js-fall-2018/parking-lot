import React from 'react';
import { ROUTES } from '../../routes/routes';

export default function Header() {
  return (
    <header>
      <h1>Al&#39;s Parking Lot</h1>
      <nav>
        <a href={ROUTES.SEARCH_CARS.path}>Search All Cars</a>
        <a href={ROUTES.SEARCH_LOT.path}>Search Parked Cars</a>
        <a href={ROUTES.CREATE_CAR.path}>Register New Cars</a>
      </nav>
    </header>
  );
};
