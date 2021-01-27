import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HomeForm } from '../HomeForm';

describe('HomeForm', () => {
  const handleSubmit = jest.fn();
  beforeEach(() => {
    render(<HomeForm handleSubmit={handleSubmit} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('initial render', () => {
    expect(screen.getByText('Project Name')).toBeInTheDocument();
    expect(
      screen.getByText(/Create/i).closest('button'),
    ).toHaveAttribute('disabled');
  });

  it('Fill Form and submit', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });

    fireEvent.change(screen.getByLabelText('Upload eplan file'), {
      target: { files: [file] },
    });
    userEvent.type(
      screen.getByLabelText('Project Name'),
      'Project Name',
    );

    await waitFor(() => {
      fireEvent.submit(screen.getByTestId('homeForm'));
    });

    expect(
      screen.getByText(/Create/i).closest('button'),
    ).not.toHaveAttribute('disabled');
    expect(handleSubmit).toBeCalled();
  });

  it('Remove eplan file from list', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });

    fireEvent.change(screen.getByLabelText('Upload eplan file'), {
      target: { files: [file] },
    });
    expect(screen.getByText(/chucknorris.png/i)).toBeDefined();

    await waitFor(async () => {
      fireEvent.click(
        await screen.findByRole('button', { name: 'file-eplan-0' }),
      );
    });
    expect(screen.queryAllByText(/chucknorris.png/i).length).toBe(0);
  });

  it('Remove sps matrix file from list', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });

    fireEvent.change(
      screen.getByLabelText('Upload SPS Matrix file'),
      {
        target: { files: [file] },
      },
    );
    expect(screen.getByText(/chucknorris.png/i)).toBeDefined();

    await waitFor(async () => {
      fireEvent.click(
        await screen.findByRole('button', {
          name: 'file-sps-0',
        }),
      );
    });
    expect(screen.queryAllByText(/chucknorris.png/i).length).toBe(0);
  });
});
