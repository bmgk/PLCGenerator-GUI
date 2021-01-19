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

    fireEvent.change(screen.getByLabelText('Upload File'), {
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

  it('Remove file from list', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });

    fireEvent.change(screen.getByLabelText('Upload File'), {
      target: { files: [file] },
    });
    expect(screen.queryByText('chucknorris.png')).not.toBeNull();

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('file-0'));
    });
    expect(screen.queryByText('chucknorris.png')).toBeNull();
  });
});
