import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { DashboardProvider } from './components/dashboard';
import { Home, Dashboard } from './pages';

import './i18n/i18n';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <DashboardProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </DashboardProvider>
  );
};

render(<App />, mainElement);
