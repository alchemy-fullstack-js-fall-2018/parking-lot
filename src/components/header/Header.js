import React from 'react';
import { ROUTES } from '../../routes';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <header id={styles.header}>
      <h1>David's Parking Lot</h1>
      <nav>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
        <Link to={ROUTES.CAR_SEARCH.linkTo()}>Search Cars</Link>
        <Link to={ROUTES.LOT_SEARCH.linkTo()}>Search Lot</Link>
        <Link to={ROUTES.REGISTER.linkTo()}>Regiser Car</Link>
      </nav>
    </header>
  );
}
