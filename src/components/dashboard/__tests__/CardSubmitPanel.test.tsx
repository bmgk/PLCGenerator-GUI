import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardSubmitPanel from '../tree/CardSubmitPanel';

import { exampleErrorAcceptParameter2 } from '../../../../tests/responses';

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
    const cannotSetWithYourself = /Cannot Set Interlock With/i;
    const duplicated = /The following values/i;

    const promise = Promise.resolve();
    const submit = jest.fn().mockRejectedValue({
      response: { data: exampleErrorAcceptParameter2 },
    });

    render(<CardSubmitPanel submit={submit} />);
    userEvent.click(screen.getByText('Accept parameter'));
    await act(() => promise);
    await waitFor(() =>
      expect(
        screen.queryAllByText(cannotSetWithYourself).length,
      ).toBeGreaterThan(0),
    );
    expect(screen.queryAllByText(duplicated).length).toBeGreaterThan(
      0,
    );
  });
});
