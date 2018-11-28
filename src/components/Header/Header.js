import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Header() {
  return (
    <Fragment>
      <h1>Lazy Larry&apos;s Pick &apos;n Pull Parking Lot Emporium</h1>
      <nav>
        <Link to={ROUTES.REGISTER.linkTo()}>
          <h4>Register Your Car</h4>
        </Link>
        <Link to={ROUTES.CAR_SEARCH.linkTo()}>
          <h4>Search All Cars</h4>
        </Link>
        <h4>Search the Lot</h4>
      </nav>
    </Fragment>
  );
}
