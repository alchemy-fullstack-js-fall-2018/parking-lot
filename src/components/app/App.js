import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import  ROUTES  from '../../routes';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </Router>
  );
}
