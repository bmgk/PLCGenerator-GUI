import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProcessProvider } from '../context';
import ProcessPlacesList from '../ProcessPlacesList';
import { getPlacesResponse } from '../../../../tests/responses';

const initial = {
  places: getPlacesResponse.Places.map((Name) => ({ Name })),
  selectedPlace: null,
  selectedProcessDefinition: null,
  selectedProcessDefinitionStep: null,
  selectedProcessDefinitionItem: null,
  selectedActions: null,
};

describe('ProcessPlacesList', () => {
  beforeEach(() => {
    return render(
      <ProcessProvider initial={initial}>
        <ProcessPlacesList />
      </ProcessProvider>,
    );
  });

  it('initial render', async () => {
    await waitFor(() =>
      expect(screen.getByText('116000V01')).toBeDefined(),
    );
  });

  it('select place', async () => {
    expect(screen.getByText('116000V01')).not.toHaveClass(
      'Mui-selected',
    );
    userEvent.click(screen.getByText('116000V01'));
    await waitFor(() =>
      expect(screen.getByText('116000V01')).toHaveClass(
        'Mui-selected',
      ),
    );
  });
});
