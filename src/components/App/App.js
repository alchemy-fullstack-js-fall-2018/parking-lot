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
          <Route component={ROUTES.CAR_SEARCH.Component} path={ROUTES.CAR_SEARCH.path} />
          <Route component={ROUTES.CAR.Component} path={ROUTES.CAR.path} />
          <Route component={ROUTES.ALL_CARS.Component} path={ROUTES.ALL_CARS.path} />
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
        </Switch>
      </Router>
    </Fragment>
  );
}
