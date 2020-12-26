import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DashboardMenu } from '../';

describe('DashboardMenu', () => {
  const submitStructure = jest.fn();
  const saveDraft = jest.fn();
  const showSettings = jest.fn();

  beforeEach(() => {
    render(
      <DashboardMenu
        submitStructure={submitStructure}
        saveDraft={saveDraft}
        showSettings={showSettings}
      />,
    );
    return userEvent.click(
      screen.getByRole('button', { name: /more/i }),
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('initial render', () => {
    expect(screen.queryByText('Generate structure')).toBeDefined();
    expect(screen.queryByText('Save draft')).toBeDefined();
    expect(screen.queryByText('Settings')).toBeDefined();
  });

  it('click Submit structure', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /generate structure/i }),
    );
    expect(submitStructure).toBeCalled();
  });

  it('click saveDraft', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /save draft/i }),
    );
    expect(saveDraft).toBeCalled();
  });

  it('click showSettings', () => {
    userEvent.click(
      screen.getByRole('menuitem', { name: /settings/i }),
    );
    expect(showSettings).toBeCalled();
  });
});
