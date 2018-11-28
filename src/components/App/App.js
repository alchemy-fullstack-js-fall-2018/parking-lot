import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Header from '../Header/Header';
import ROUTES from '../../routes';
import styles from './App.css';

export default function App() {
  return (
    <Fragment>
      <h1 styles={styles.css}>Larry&apos;s Pick &apos;n Pull Parking Lot Emporium</h1>
      <Header />
      <Router>
        <Switch>
          <Route path={ROUTES.CAR_SEARCH.path} component={ROUTES.CAR_SEARCH.Component}/>
          <Route path={ROUTES.CARS.path} component={ROUTES.CARS.Component} />
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component} />
        </Switch>
      </Router>
    </Fragment>
  );
}
