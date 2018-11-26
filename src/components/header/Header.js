import React from 'react';
import styles from './Header.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id={styles.header}>
      <h1>Lot Keeper</h1>
      <nav>
        <Link to={ROUTES.CAR_SEARCH.linkTo()}>Search Cars</Link>
        <Link to={ROUTES.LOT_SEARCH.linkTo()}>Search Lots</Link>
        <Link to={ROUTES.REGISTER.linkTo()}>Register a Car</Link>
      </nav>
    </div>
  );
}
