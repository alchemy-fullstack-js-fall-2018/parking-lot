import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import Header from '../header/Header';

export default function App() {
  return (
    <Fragment>
      <h1>Parking Lot App</h1>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route
              path={ROUTES.REGISTER_CAR.path}
              component={ROUTES.REGISTER_CAR.component}
            />
            <Route
              path={ROUTES.CARS_SEARCH.path}
              component={ROUTES.CARS_SEARCH.component}
            />
            <Route
              path={ROUTES.CAR_DETAIL.path}
              component={ROUTES.CAR_DETAIL.component}
            />
            <Route
              path={ROUTES.SEARCH_LOT_CARS.path}
              component={ROUTES.SEARCH_LOT_CARS.component}
            />
            <Route
              path={ROUTES.LOT_CARS.path}
              component={ROUTES.LOT_CARS.component}
            />
            <Route path={ROUTES.CARS.path} component={ROUTES.CARS.component} />
            <Route path={ROUTES.HOME.path} component={ROUTES.HOME.component} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
}
