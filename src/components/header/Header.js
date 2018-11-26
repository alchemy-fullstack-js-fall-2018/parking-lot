import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h3>Fun Parking Lot App</h3>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to={ROUTES.HOME.linkTo('/')}>Home</Link>
        <Link className={styles.link} to={ROUTES.REGISTER_CAR.linkTo('/cars/register')}>Register Car</Link>
        <Link className={styles.link} to={ROUTES.CAR_SEARCH.linkTo('/cars/search')}>Search All Cars</Link>
        <Link className={styles.link} to={ROUTES.SEARCH_LOT_CARS.linkTo('/lot/search')}>Search Cars in Lot</Link>
      </div>
    </header>
  );
}
