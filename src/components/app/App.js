import React, { Fragment } from 'react';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import ROUTES from '../../routes';

export default function App() {
  console.log(ROUTES);
  return (
    <Fragment>
      <h1>Parking Lot</h1>
      <Header />
      <Router>
        <Switch>
        <Route path={ROUTES.ALL_CARS.path} component={ROUTES.ALL_CARS.Component} />
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component} />

          {/* <Route path={ROUTES.CAR_DETAIL.path} component={ROUTES.CAR_DETAIL.Component} />
          <Route path={ROUTES.CAR_SEARCH.path} component={ROUTES.CAR_SEARCH.Component} />
          <Route path={ROUTES.REGISTER.path} component={ROUTES.REGISTER.Component} />
          <Route path={ROUTES.ALL_LOT.path} component={ROUTES.ALL_LOT.Component} />
          <Route path={ROUTES.LOT_SEARCH.path} component={ROUTES.LOT_SEARCH.Component} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}
