import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function App() {
  return (
    <Fragment>
      <h1>Parking Lot</h1>
      <Router>
        <Switch>
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component} />
          {/* <Route path={ROUTES.ALLCARS.path} component={ROUTES.ALLCARS.Component} />
          <Route path={ROUTES.CAR_DETAIL.path} component={ROUTES.CAR_DETAIL.Component} />
          <Route path={ROUTES.CAR_SEARCH.path} component={ROUTES.CAR_SEARCH.Component} />
          <Route path={ROUTES.REGISTER.path} component={ROUTES.REGISTER.Component} />
          <Route path={ROUTES.ALL_LOT.path} component={ROUTES.ALL_LOT.Component} />
          <Route path={ROUTES.LOT_SEARCH.path} component={ROUTES.LOT_SEARCH.Component} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}
