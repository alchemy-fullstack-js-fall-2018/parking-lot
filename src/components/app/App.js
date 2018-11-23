import React, { Fragment } from 'react';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import 'normalize.css';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path={ROUTES.REGISTER.path} component={ROUTES.REGISTER.Component}/>
          <Route path={ROUTES.CAR_SEARCH.path} component={ROUTES.CAR_SEARCH.Component}/>
          <Route path={ROUTES.CAR_DETAIL.path} component={ROUTES.CAR_DETAIL.Component}/>
          <Route path={ROUTES.CARS.path} component={ROUTES.CARS.Component}/>
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component}/>
        </Switch>
      </Router>
    </Fragment>
  );
}
