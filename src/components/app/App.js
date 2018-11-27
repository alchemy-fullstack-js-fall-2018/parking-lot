import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '../../routes/routes';

export default function App() {
  return (
    <Fragment>
      <h1>Parking Lot</h1>
      <Router>
        <Switch>
          <Route path={ROUTES.CARS_SEARCH.path} component={ROUTES.CARS_SEARCH.component} />
          <Route path={ROUTES.CAR_DETAIL.path} component={ROUTES.CAR_DETAIL.component} />
          <Route path={ROUTES.CARS.path} component={ROUTES.CARS.component} />
        </Switch>
      </Router>
    </Fragment>
  );
}
