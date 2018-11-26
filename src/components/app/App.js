import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import  ROUTES  from '../../routes';
import 'normalize.css';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route component={ROUTES.CAR_SEARCH.Component} path={ROUTES.CAR_SEARCH.path} />
          <Route component={ROUTES.REGISTER_CAR.Component} path={ROUTES.REGISTER_CAR.path}/>
          <Route component={ROUTES.CAR.Component} path={ROUTES.CAR.path} />
          <Route component={ROUTES.ALL_CARS.Component} path={ROUTES.ALL_CARS.path}/>
          <Route component={ROUTES.SEARCH_LOT_CARS.Component} path={ROUTES.SEARCH_LOT_CARS.path} />
          <Route component={ROUTES.LOT_CARS.Component} path={ROUTES.LOT_CARS.path} />
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </Router>
  );
}
