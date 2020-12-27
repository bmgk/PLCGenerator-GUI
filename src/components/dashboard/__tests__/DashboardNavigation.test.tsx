import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as apiDashboard from '../../../api/dashboard/generateStructure';
import * as electronService from '../../../services/electron/dashboard';
import { DashboardProvider } from '../context';
import { DashboardNavigation } from '../DashboardNavigation';

import { HomeFormTreeResponse } from 'types';

jest.mock('../../../services/electron', () => ({
  invokeProjectImporter: () => Promise.resolve(),
  pickFolder: () => Promise.resolve('c:\\data'),
  saveDraft: (tree: HomeFormTreeResponse) => Promise.resolve(),
}));

describe('DashboardNavigation', () => {
  const value = 0;
  const setValue = jest.fn();
  beforeEach(() => {
    render(
      <DashboardProvider>
        <DashboardNavigation value={value} setValue={setValue} />
      </DashboardProvider>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('initial render', () => {
    expect(screen.queryByText(/table/i)).toBeDefined();
    expect(screen.queryByText(/tree/i)).toBeDefined();
  });

  it('Change tab to Table', () => {
    userEvent.click(screen.getByText(/table/i));
    expect(setValue).toBeCalledWith(0);
  });

  it('Change tab to Tree', () => {
    userEvent.click(screen.getByText(/tree/i));
    expect(setValue).toBeCalledWith(1);
  });

  it('Generate structure success', async () => {
    userEvent.click(screen.getByRole('button', { name: /more/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: /generate structure/i }),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).toHaveStyle(
        'opacity: 1;',
      ),
    );

    await waitFor(() =>
      expect(
        screen.queryByText('Structure has been created'),
      ).toBeDefined(),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).toHaveStyle(
        'opacity: 0;',
      ),
    );
  });

  it('Generate structure error', async () => {
    jest
      .spyOn(apiDashboard, 'generateStructure')
      .mockRejectedValue(new Error('Async error'));

    userEvent.click(screen.getByRole('button', { name: /more/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: /generate structure/i }),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).toHaveStyle(
        'opacity: 1;',
      ),
    );

    await waitFor(() =>
      expect(
        screen.queryByText('Error while creating structure'),
      ).toBeDefined(),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).toHaveStyle(
        'opacity: 0;',
      ),
    );
  });

  it('Save draft success', async () => {
    userEvent.click(screen.getByRole('button', { name: /more/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: /save draft/i }),
    );

    await waitFor(() =>
      expect(
        screen.queryByText('Draft has been saved'),
      ).toBeDefined(),
    );
  });

  it('Save draft error', async () => {
    jest
      .spyOn(electronService, 'saveDraft')
      .mockRejectedValue(new Error('Async error'));

    userEvent.click(screen.getByRole('button', { name: /more/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: /save draft/i }),
    );

    await waitFor(() =>
      expect(screen.queryByText('Error while saving draft')),
    );
  });
});
