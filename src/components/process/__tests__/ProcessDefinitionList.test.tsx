import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProcessDefinitionList from '../ProcessDefinitionList';
import {
  setCurrentProcessDefinitionStep,
  ProcessProvider,
} from '../context';
import { getPlacesResponse } from '../../../../tests/responses';

const initial = {
  places: getPlacesResponse.Places.map((Name) => ({ Name })),
  selectedPlace: { Name: getPlacesResponse.Places[4] },
  selectedProcessDefinition: {
    Element: getPlacesResponse.Places[4],
    Branches: [
      {
        Steps: [
          {
            ShortcutName: 'ShortcutName',
            Comment: 'Comment',
            Actions: [],
          },
          {
            ShortcutName: 'MarjanKaleta',
            Comment: 'UbijaKotleta',
            Actions: [],
          },
        ],
      },
    ],
  },
  selectedProcessDefinitionStep: null,
  selectedProcessDefinitionItem: null,
  selectedActions: null,
};

const dispatch = jest.fn();

jest.mock('../context', () => ({
  //@ts-ignore
  ...jest.requireActual('../context'),
  useProcessDispatch: () => dispatch,
}));

describe('ProcessDefinitionList', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    return render(
      <ProcessProvider initial={initial}>
        <ProcessDefinitionList />
      </ProcessProvider>,
    );
  });

  it('initial render', async () => {
    await waitFor(() =>
      expect(screen.getByText('ShortcutName: Comment')).toBeDefined(),
    );
    await waitFor(() =>
      expect(
        screen.getByText('MarjanKaleta: UbijaKotleta'),
      ).toBeDefined(),
    );
  });

  it('select process definition', async () => {
    expect(dispatch).not.toBeCalled();
    userEvent.click(screen.getByText('ShortcutName: Comment'));
    await waitFor(() =>
      expect(dispatch).toBeCalledWith(
        setCurrentProcessDefinitionStep(0),
      ),
    );
  });
});
