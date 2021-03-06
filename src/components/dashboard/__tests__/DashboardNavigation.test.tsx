import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { homeFormSubmitTreeForTests } from '../../../../tests/responses';
import { DashboardProvider } from '../context';
import { DashboardNavigation } from '../DashboardNavigation';

import { HomeFormTreeResponse } from 'types';

jest.mock('../../../services/electron', () => ({
  invokeProjectImporterLoop: (paths: string[]) => Promise.resolve(),
  pickFolder: () => Promise.resolve('c:\\data'),
  saveDraft: (tree: HomeFormTreeResponse) => Promise.resolve(),
  pickDraftJSON: () => Promise.resolve(homeFormSubmitTreeForTests),
}));

describe('DashboardNavigation', () => {
  const value = 0;
  const setValue = jest.fn();
  beforeEach(() => {
    render(
      <DashboardProvider
        initial={{
          tree: { Name: '', Children: [] },
          newAvaliableValues: ['test'],
          rows: [],
          selectedLeaf: null,
        }}
      >
        <DashboardNavigation value={value} setValue={setValue} />
      </DashboardProvider>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('initial render', () => {
    expect(screen.queryByText(/Unused Symbols/i)).toBeDefined();
    expect(screen.queryByText(/Structure/i)).toBeDefined();
  });

  it('Change tab to Unsued symbols', () => {
    userEvent.click(screen.getByText(/Unused Symbols/i));
    expect(setValue).toBeCalledWith(0);
  });

  it('Change tab to Structure', () => {
    userEvent.click(screen.getByText(/Structure/i));
    expect(setValue).toBeCalledWith(1);
  });

  it('Generate structure success', async () => {
    userEvent.click(screen.getByRole('button', { name: /menu/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: /generate/i }),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).toHaveStyle(
        'opacity: 1;',
      ),
    );

    await waitFor(() =>
      expect(
        screen.queryByText('Generating has been completed'),
      ).toBeDefined(),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).toHaveStyle(
        'opacity: 0;',
      ),
    );
  });

  it('Export configuration success', async () => {
    userEvent.click(screen.getByRole('button', { name: /menu/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: 'Export configuration' }),
    );

    await waitFor(() =>
      expect(
        screen.queryByText('Do you want to save draft?'),
      ).toBeDefined(),
    );

    userEvent.click(screen.getByRole('button', { name: /accept/i }));
    await waitFor(() =>
      expect(
        screen.queryByText('Configuration has been exported'),
      ).toBeDefined(),
    );
  });

  it('Import configuration success', async () => {
    userEvent.click(screen.getByRole('button', { name: /menu/i }));
    userEvent.click(
      screen.getByRole('menuitem', { name: 'Import configuration' }),
    );

    await waitFor(() =>
      expect(
        screen.queryByText('Configuration has been imported'),
      ).toBeDefined(),
    );
  });
});
