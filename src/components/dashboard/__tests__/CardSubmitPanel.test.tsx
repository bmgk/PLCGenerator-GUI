import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CardSubmitPanel } from '../treePanel';

describe('CardSubmitPannel', () => {
  it('initial render', () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockResolvedValue(() => promise);

    render(<CardSubmitPanel submit={submit} />);
    expect(screen.getByText('Accept parameter')).toBeDefined();
  });

  it('submit called', async () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockResolvedValue(() => promise);

    render(<CardSubmitPanel submit={submit} />);
    userEvent.click(screen.getByText('Accept parameter'));
    await act(() => promise);
    expect(submit).toBeCalled();
  });

  it('submit called success snackbar', async () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockResolvedValue(() => promise);

    render(<CardSubmitPanel submit={submit} />);
    userEvent.click(screen.getByText('Accept parameter'));
    await act(() => promise);
    expect(
      screen.getByText('Parameter has been updated'),
    ).toBeDefined();
  });

  it('submit called error snackbar', async () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockRejectedValue(() => promise);

    render(<CardSubmitPanel submit={submit} />);
    userEvent.click(screen.getByText('Accept parameter'));
    await act(() => promise);
    expect(
      screen.getByText('Error while updating parameter'),
    ).toBeDefined();
  });
});
