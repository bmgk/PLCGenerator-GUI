import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { DashboardProvider } from '../../components/dashboard/context';
import Home from '../Home';

describe('Home', () => {
  it('check if render', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    render(
      <DashboardProvider>
        <Router history={history}>
          <Home />
        </Router>
      </DashboardProvider>,
    );
    expect(screen.getByText('Project Name')).toBeInTheDocument();
  });

  it('check redirect after submit', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    render(
      <DashboardProvider>
        <Router history={history}>
          <Home />
        </Router>
      </DashboardProvider>,
    );

    userEvent.type(
      screen.getByLabelText('Project Name'),
      'Test project',
    );
    const file = new File(['(⌐□_□)'], 'chucknorris.sdf', {
      type: '.sdf',
    });

    userEvent.upload(
      screen.getByLabelText('Upload Eplan Tags'),
      file,
    );

    await waitFor(() => {
      fireEvent.submit(screen.getByTestId('homeForm'));
    });

    await waitFor(() => [
      expect(history.push).toBeCalledWith('/dashboard'),
    ]);
  });
});
