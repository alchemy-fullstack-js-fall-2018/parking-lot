import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import { ROUTES } from '../../routes';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route
            path={ROUTES.REGISTER.path}
            component={ROUTES.REGISTER.Component}
          />
          <Route
            path={ROUTES.CAR_SEARCH.path}
            component={ROUTES.CAR_SEARCH.Component}
          />
          <Route path={ROUTES.CAR_DETAIL.path} component={ROUTES.CAR_DETAIL.Component}/>
          <Route path={ROUTES.CARS.path} component={ROUTES.CARS.Component} />
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component} />
        </Switch>
      </Fragment>
    </Router>
  );
}
