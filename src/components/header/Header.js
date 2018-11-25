import React from 'react';
import { ROUTES } from '../../routes';
import styles from './Header';

export default function Header() {
  return(
    <header id={styles.header}>
      <h1>David's Parking Lot</h1>
      <nav>
        <a href={ROUTES.CAR_SEARCH.path}>Search Cars</a>
        <a href={ROUTES.LOT_SEARCH.path}>Search Lot</a>
        <a href={ROUTES.REGISTER.path}>Register a Car</a>
      </nav>
    </header>
  );
}
