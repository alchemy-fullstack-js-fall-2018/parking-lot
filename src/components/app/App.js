import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Fragment>
      <h1>doing some car stuff</h1>
      <Router>
        <Switch>

        </Switch>
      </Router>
    </Fragment>
  );
}
