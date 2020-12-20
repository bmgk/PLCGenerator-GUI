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

import { DashboardProvider } from '../../components';
import Home from '../Home';
import {
  homeFormSubmit,
  homeFormSubmitTree,
} from '../../../tests/responses';

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
    userEvent.type(screen.getByTestId('projectName'), 'Test project');
    userEvent.upload(
      screen.getByLabelText('Upload File'),
      new File(['hello'], 'hello.png', { type: 'image/png' }),
    );
    await waitFor(() => {
      fireEvent.submit(screen.getByTestId('homeForm'));
    });
    await waitFor(() => [
      expect(history.push).toBeCalledWith('/dashboard', {
        rows: homeFormSubmit,
        tree: homeFormSubmitTree,
      }),
    ]);
  });
});
