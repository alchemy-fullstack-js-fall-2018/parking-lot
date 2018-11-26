import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Header from '../Header/Header';
import ROUTES from '../../routes';

export default function App() {
  return (
    <Fragment>
      <h1>Larry&apos;s Pick &apos;n Pull Parking Lot Emporium</h1>
      <Header />
      <Router>
        <Switch>
          <Route path={ROUTES.CARS.path} component={ROUTES.CARS.Component} />
        </Switch>
      </Router>
    </Fragment>
  );
}
