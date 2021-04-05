import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { DashboardProvider } from './components/dashboard/context';
import { ProcessProvider } from 'components/process/context';
import { toastConfig } from './components/common/useNotification';
import theme from './components/common/Theme';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './i18n/i18n';
import 'react-toastify/dist/ReactToastify.css';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <DashboardProvider>
        <ProcessProvider>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </ProcessProvider>
      </DashboardProvider>
      <ToastContainer {...toastConfig} />
    </MuiThemeProvider>
  );
};

render(<App />, mainElement);
