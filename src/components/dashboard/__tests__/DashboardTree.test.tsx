import React from 'react';
import DashboardTree from '../DashboardTree';
import {
  fireEvent,
  render,
  screen,
  waitFor,
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

const selectOption = (label: string, option: string) => {
  const select = screen.getByLabelText(label);
  fireEvent.focus(select);
  fireEvent.keyDown(select, {
    key: 'ArrowDown',
    keyCode: 40,
    code: 40,
  });
  fireEvent.click(screen.getByText(option));
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

const names = getNames(homeFormSubmitTreeForTests, []);

describe('DashboardTree', () => {
  beforeEach(() => {
    const initial = {
      tree: homeFormSubmitTreeForTests,
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

  it('Display not empty parameter tree panel, single parameter', () => {
    userEvent.click(screen.getByText('121050V02'));
    expect(screen.getByText('FmList')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(2);
    expect(screen.queryAllByText('Value').length).toBe(1);
  });

  it('Display not empty parameter tree panel, multiple parameter, next element', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    expect(screen.getByText('Positions')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(3);
    expect(screen.queryAllByText('Value').length).toBe(3);
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
  });

  it('Display not empty parameter tree panel, multiple parameter, prev element and then next element', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    expect(screen.getByText('Positions')).toBeDefined();
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
    expect(screen.getByText('Positions')).toBeDefined();
    expect(screen.queryAllByText('Name').length).toBe(3);
    expect(screen.queryAllByText('Value').length).toBe(3);
  });

  it('Create button not disabled after filling form', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    selectOption('SensorName-create', 'BGE02999');
    selectOption('Index-create', '999');
    expect(
      screen.getByRole('button', {
        name: /create/i,
      }),
    ).not.toBeDisabled();
  });

  it('Create new table item, uses select', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    selectOption('SensorName-create', 'BGE02999');
    selectOption('Index-create', '999');
    userEvent.click(
      screen.getByRole('button', {
        name: /create/i,
      }),
    );
    expect(screen.queryAllByText('Name').length).toBe(4);
    expect(screen.queryAllByText('Value').length).toBe(4);
  });

  it('Create new table item uses select and prev element and then next element ', () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    selectOption('SensorName-create', 'BGE02999');
    selectOption('Index-create', '999');
    userEvent.click(
      screen.getByRole('button', {
        name: /create/i,
      }),
    );
    expect(screen.queryAllByText('Name').length).toBe(4);
    expect(screen.queryAllByText('Value').length).toBe(4);
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
    expect(screen.queryAllByText('Name').length).toBe(4);
    expect(screen.queryAllByText('Value').length).toBe(4);
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
    userEvent.clear(screen.getByLabelText('Name-create'));
    userEvent.type(
      screen.getByLabelText('Name-create'),
      'Marjan Kaleta ubija kotleta',
    );
    //@ts-ignore
    expect(screen.getByLabelText('Name-create').value).toBe(
      'Marjan Kaleta ubija kotleta',
    );
    userEvent.click(screen.getByText('121050V02'));
    //@ts-ignore
    expect(screen.getByLabelText('Name-create').value).not.toBe(
      'Marjan Kaleta ubija kotleta',
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
      expect(screen.getByTestId('121050V02')).toHaveStyle({
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
});
