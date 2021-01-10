import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DashboardMenu, DashboardProvider } from '../';

describe('DashboardMenu', () => {
  const submitStructure = jest.fn();
  const saveDraft = jest.fn();
  const showSettings = jest.fn();
  const importDraft = jest.fn();

  beforeEach(() => {
    render(
      <DashboardProvider>
        <DashboardMenu
          submitStructure={submitStructure}
          saveDraft={saveDraft}
          showSettings={showSettings}
          importDraft={importDraft}
        />
      </DashboardProvider>,
    );
    return userEvent.click(
      screen.getByRole('button', { name: /menu/i }),
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('initial render', () => {
    expect(screen.queryByText('Generate')).toBeDefined();
    expect(screen.queryByText('Export configuration')).toBeDefined();
    expect(screen.queryByText('Import configuration')).toBeDefined();
    expect(screen.queryByText('Settings')).toBeDefined();
  });

  it('click Submit generate', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /generate/i }),
    );
    expect(submitStructure).toBeCalled();
  });

  it('click Export', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /export configuration/i }),
    );
    expect(saveDraft).toBeCalled();
  });
  it('click import', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /import configuration/i }),
    );
    expect(importDraft).toBeCalled();
  });
  it('click showSettings', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /settings/i }),
    );
    expect(showSettings).toBeCalled();
  });
});
