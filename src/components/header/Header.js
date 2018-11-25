import React from 'react';
import styles from './Header.css';
import { ROUTES } from '../../routes/routes';

export default function Header() {
  return (
    <div id={styles.header}>
      <h1>Lot Keeper</h1>
      <nav>
        <a href={ROUTES.CAR_SEARCH.path}>Search Cars</a>
        <a href={ROUTES.LOT_SEARCH.path}>Search Lots</a>
        <a href={ROUTES.REGISTER.path}>Register a Car</a>
      </nav>
    </div>
  );
}
