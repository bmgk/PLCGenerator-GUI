import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RootTreePanel } from '../treePanel';

describe('RootTreePanel', () => {
  it('initial render', () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockResolvedValue(() => promise);

    render(<RootTreePanel submit={submit} />);
    expect(screen.getByText('Accept structure')).toBeDefined();
  });

  it('submit called', async () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockResolvedValue(() => promise);

    render(<RootTreePanel submit={submit} />);
    userEvent.click(screen.getByText('Accept structure'));
    await act(() => promise);
    expect(submit).toBeCalled();
  });

  it('submit called success snackbar', async () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockResolvedValue(() => promise);

    render(<RootTreePanel submit={submit} />);
    userEvent.click(screen.getByText('Accept structure'));
    await act(() => promise);
    expect(
      screen.getByText('Strucutre has been updated'),
    ).toBeDefined();
  });

  it('submit called error snackbar', async () => {
    const promise = Promise.resolve();
    const submit = jest.fn().mockRejectedValue(() => promise);

    render(<RootTreePanel submit={submit} />);
    userEvent.click(screen.getByText('Accept structure'));
    await act(() => promise);
    expect(
      screen.getByText('Error while updating structure'),
    ).toBeDefined();
  });
});
