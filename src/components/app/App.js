import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import Header from '../header/Header';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route component={ROUTES.SEARCH_LOT.Component} path={ROUTES.SEARCH_LOT.path} />
          <Route component={ROUTES.LOT.Component} path={ROUTES.LOT.path} />
          <Route component={ROUTES.SEARCH_CARS.Component} path={ROUTES.SEARCH_CARS.path} />
          <Route component={ROUTES.CREATE_CAR.Component} path={ROUTES.CREATE_CAR.path} />
          <Route component={ROUTES.CAR.Component} path={ROUTES.CAR.path} />
          <Route component={ROUTES.ALL_CARS.Component} path={ROUTES.ALL_CARS.path} />
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
        </Switch>
      </Router>
    </Fragment>
  );
}
