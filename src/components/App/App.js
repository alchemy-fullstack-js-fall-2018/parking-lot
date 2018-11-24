import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ROUTES from '../../routes';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route component={ROUTES.SEARCH_CARS.Component} path={ROUTES.SEARCH_CARS.path} />
          <Route component={ROUTES.REGISTER_CAR.Component} path={ROUTES.REGISTER_CAR.path} />
          <Route component={ROUTES.CAR.Component} path={ROUTES.CAR.path} />
          <Route component={ROUTES.ALL_CARS.Component} path={ROUTES.ALL_CARS.path} />
          <Route component={ROUTES.LOT_CARS.Component} path={ROUTES.LOT_CARS.path} />
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </Router>
  );
}
