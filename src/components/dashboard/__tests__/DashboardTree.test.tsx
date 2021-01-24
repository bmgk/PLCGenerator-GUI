import React from 'react';
import DashboardTree from '../DashboardTree';
import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DashboardProvider } from '../context';
import { homeFormSubmitTreeForTests } from '../../../../tests/responses';

import {
  HomeFormTreeResponse,
  HomeResponseTreeChildren,
} from 'types';

const getNames = (
  nodes: HomeFormTreeResponse | HomeResponseTreeChildren,
  names: string[],
) => {
  names.push(nodes.Name);
  Array.isArray(nodes.Children)
    ? nodes.Children.map((node: HomeResponseTreeChildren) =>
        getNames(node, names),
      )
    : null;
  return names;
};

const coloredKeys = [
  '121050V01',
  '121050DT1AE1',
  '121050V02BGT22',
  '1',
  '121050DT1',
  '121050V01BGT11',
  '121050V01BGT12',
  '121050V01BGT13',
  '121050V01BGT14',
  '121050V01BGT19',
  '121050V01BGT21',
  '121050V02',
  '121050V02BGT15',
  '121050V02BGT16',
  '121050V02BGT17',
  '121050V02BGT18',
  '121050V02BGT20',
  '121050DT1',
];

const searchSelected = { background: '#3D9970' };

const names = getNames(homeFormSubmitTreeForTests, []);

const create = () => {
  userEvent.click(
    screen.getByRole('button', {
      name: /create/i,
    }),
  );
  jest.advanceTimersByTime(1000);
};

describe('DashboardTree', () => {
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
    const initial = {
      tree: homeFormSubmitTreeForTests,
      newAvaliableValues: ['121050V02'],
      rows: [],
      selectedLeaf: null,
    };
    return render(
      <DashboardProvider initial={initial}>
        <DashboardTree />
      </DashboardProvider>,
    );
  });

  it('initial render', () => {
    names.forEach((singleName) => {
      expect(screen.queryByText(singleName)).toBeDefined();
    });
  });

  it('Display root tree panel', () => {
    userEvent.click(screen.getByText('KGBHTS'));
    expect(
      screen.getByText(
        'You have choosed root, pick another tree element',
      ),
    ).toBeDefined();
  });

  it('Display empty parameter tree panel', () => {
    userEvent.click(screen.getByText('121050V01VI1'));
    expect(screen.getByText('Parameters are empty')).toBeDefined();
  });

  it('Display not empty parameter tree panel, single parameter', async () => {
    userEvent.click(screen.getByText('121050V02'));
    expect(
      screen.getByRole('button', {
        name: /create/i,
      }),
    ).toBeDefined();
  });

  it('Display not empty parameter tree panel, multiple parameter, next element', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    expect(screen.getByText('Positions')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(2);
    expect(screen.queryAllByText('Value').length).toBe(2);
    userEvent.click(
      screen.getByRole('button', {
        name: /next-parameter/i,
      }),
    );
    expect(screen.getByText('Controller')).toBeDefined();

    expect(screen.queryAllByText('Name').length).toBe(1);
    expect(screen.queryAllByText('Value').length).toBe(1);
  });

  it('Display not empty parameter tree panel, multiple parameter, prev element', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    expect(screen.getByText('Positions')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(2);
    expect(screen.queryAllByText('Value').length).toBe(2);
    userEvent.click(
      screen.getByRole('button', {
        name: /previous-parameter/i,
      }),
    );
    expect(screen.getByText('Technology')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(1);
    expect(screen.queryAllByText('Value').length).toBe(1);
  });

  it('Display not empty parameter tree panel, multiple parameter, prev element and then next element', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    expect(screen.getByText('Positions')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(2);
    expect(screen.queryAllByText('Value').length).toBe(2);
    userEvent.click(
      screen.getByRole('button', {
        name: /previous-parameter/i,
      }),
    );
    expect(screen.getByText('Technology')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(1);
    expect(screen.queryAllByText('Value').length).toBe(1);
    userEvent.click(
      screen.getByRole('button', {
        name: /next-parameter/i,
      }),
    );
    expect(screen.getByText('Positions')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(2);
    expect(screen.queryAllByText('Value').length).toBe(2);
  });

  it('Create new table item', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    create();
    expect(screen.queryAllByText('Name').length).toBe(3);
    expect(screen.queryAllByText('Value').length).toBe(3);
  });

  it('Create new item, then change parameter and return', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    create();
    expect(screen.queryAllByText('Name').length).toBe(3);
    expect(screen.queryAllByText('Value').length).toBe(3);
    userEvent.click(
      screen.getByRole('button', {
        name: /previous-parameter/i,
      }),
    );
    expect(screen.getByText('Technology')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(1);
    expect(screen.queryAllByText('Value').length).toBe(1);
    userEvent.click(
      screen.getByRole('button', {
        name: /next-parameter/i,
      }),
    );
    expect(screen.queryAllByText('Name').length).toBe(3);
    expect(screen.queryAllByText('Value').length).toBe(3);
  });

  it('Check when value is not array, then do not display create icon', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    userEvent.click(
      screen.getByRole('button', {
        name: /next-parameter/i,
      }),
    );
    expect(
      screen.queryByRole('button', {
        name: /create/i,
      }),
    ).toBeNull();
  });

  it('Do not preserve value when change tree item, when same structure', async () => {
    userEvent.click(screen.getByText('121050V01'));
    userEvent.type(
      screen.getByLabelText('Name'),
      'Marjan Kaleta ubija kotleta',
    );
    //@ts-ignore
    expect(screen.getByLabelText('Name').value).toBe(
      'Marjan ubija koteltaMarjan Kaleta ubija kotleta',
    );
    userEvent.click(screen.getByText('121050V02'));
    //@ts-ignore
    expect(screen.getByLabelText('Name').value).not.toBe(
      'Marjan ubija koteltaMarjan Kaleta ubija kotleta',
    );
  });

  it('Do not preserve index when change tree item, when not same structure', async () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    userEvent.click(
      screen.getByRole('button', {
        name: /next-parameter/i,
      }),
    );
    expect(screen.queryByText('Controller')).toBeDefined();
    userEvent.click(screen.getByText('121050DT1'));
    expect(screen.queryByText('FmList')).toBeDefined();
    expect(
      screen.queryByRole('button', {
        name: /next-parameter/i,
      }),
    ).toBeNull();
  });

  describe('Colors in tree', () => {
    it('Check whole tree colors', () => {
      const blackKeys = names.filter(
        (el) => !coloredKeys.includes(el),
      );
      blackKeys.forEach((singleName) => {
        expect(screen.getByTestId(singleName)).toHaveStyle({
          color: 'black',
        });
      });
    });

    it('Tree element with initial values, but not fully completed', () => {
      expect(screen.getByTestId('121050V01')).toHaveStyle({
        color: 'yellow',
      });
      expect(screen.getByTestId('121050DT1AE1')).toHaveStyle({
        color: 'yellow',
      });
    });

    it('Tree element with appended new values from accepting parameters', () => {
      expect(screen.getByTestId('121050V02')).toHaveStyle({
        color: 'red',
      });
    });

    it('Tree element with no initial values, but with avaliable messages', () => {
      expect(screen.getByTestId('1')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050DT1')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V01BGT11')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V01BGT12')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V01BGT13')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V01BGT14')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V01BGT19')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V01BGT21')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V02BGT15')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V02BGT16')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V02BGT17')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V02BGT18')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050V02BGT20')).toHaveStyle({
        color: 'purple',
      });
      expect(screen.getByTestId('121050DT1')).toHaveStyle({
        color: 'purple',
      });
    });

    it('Tree element with values filled and with avaliable messages, completed leaf', () => {
      expect(screen.getByTestId('121050V02BGT22')).toHaveStyle({
        color: 'green',
      });
    });
  });
  describe('Search functionallity', () => {
    it('Search functionallity 2 results', async () => {
      const input = screen.getByLabelText('Search elements');
      userEvent.type(input, '121050V02BGT20');

      expect(await screen.findByText('2 results')).toBeDefined();
      const first = await screen.findByTestId('121050V02BGT20');
      const second = await screen.findByTestId('121050V02BGT20a');
      const third = await screen.findByTestId('121050V02BGT18');
      expect(first.children[0]).toHaveStyle(searchSelected);
      expect(second.children[0]).toHaveStyle(searchSelected);
      expect(third.children[0]).not.toHaveStyle(searchSelected);
    });

    it('Search functionallity 0 results', async () => {
      const input = screen.getByLabelText('Search elements');
      userEvent.type(input, '121050V02BGT20223434');

      expect(await screen.findByText('0 result')).toBeDefined();
    });

    it('Hide tree items', async () => {
      userEvent.click(screen.getByText('121050V01'));
      await waitForElementToBeRemoved(() =>
        screen.getByTestId('121050V01BGT21'),
      );
    });

    it('Hide tree items and expand them', async () => {
      userEvent.click(screen.getByText('121050V01'));
      await waitForElementToBeRemoved(() =>
        screen.getByTestId('121050V01BGT21'),
      );
      userEvent.click(screen.getByText('121050V01'));
      expect(
        await within(screen.getByTestId('121050V01')).findByTestId(
          '121050V01BGT21',
        ),
      ).toBeDefined();
    });
  });
});
