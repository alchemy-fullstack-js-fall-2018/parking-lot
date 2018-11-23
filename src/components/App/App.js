import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ROUTES from '../../routes';

export default function App() {
  return (
    <Fragment>
      <h1>Parking Lot</h1>
      <Router>
        <Switch>
          <Route component={ROUTES.CAR.Component} path={ROUTES.CAR.path} />
          <Route component={ROUTES.CARS.Component} path={ROUTES.CARS.path} />
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
        </Switch>
      </Router>
    </Fragment>
  );
}
