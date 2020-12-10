import React from "react";
import DashboardTree from "../DashboardTree";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { DashboardProvider } from "../context";
import { homeFormSubmitTreeForTests } from "../../../../tests/responses";

import { HomeFormTreeResponse, HomeResponseTreeChildren } from "types";

const getNames = (
  nodes: HomeFormTreeResponse | HomeResponseTreeChildren,
  names: string[]
) => {
  names.push(nodes.Name);
  Array.isArray(nodes.Children)
    ? nodes.Children.map((node: HomeResponseTreeChildren) =>
      getNames(node, names)
    )
    : null;
  return names;
};

describe("DashboardTree", () => {
  beforeEach(() => {
    const initial = {
      tree: homeFormSubmitTreeForTests,
      rows: [],
      selectedLeaf: null,
    }
    return render(
      <DashboardProvider initial={initial}>
        <DashboardTree />
      </DashboardProvider>
    );
  });

  it("initial render", () => {
    const names = getNames(homeFormSubmitTreeForTests, []);
    names.forEach((singleName) => {
      expect(screen.queryByText(singleName)).toBeDefined();
    });
  });

  it("Display root tree panel", () => {
    userEvent.click(screen.getByText('KGBHTS'))
    expect(screen.getByText('You have choosed root, pick another tree element')).toBeDefined()
  });

  it("Display empty parameter tree panel", () => {
    userEvent.click(screen.getByText('121050V01VI1'))
    expect(screen.getByText('Parameters are empty')).toBeDefined()
  });

  it("Display not empty parameter tree panel, single parameter", () => {
    userEvent.click(screen.getByText('121050V02'))
    expect(screen.getByText('FmList')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(2)
    expect(screen.queryAllByText('Value').length).toBe(1)
  });

  it("Display not empty parameter tree panel, multiple parameter, next element", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    expect(screen.getByText('Positions')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(3)
    expect(screen.queryAllByText('Value').length).toBe(3)
    userEvent.click(screen.getByRole('button', {
      name: /next-parameter/i
    }))
    expect(screen.getByText('Controller')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(1)
    expect(screen.queryAllByText('Value').length).toBe(1)
  });

  it("Display not empty parameter tree panel, multiple parameter, prev element", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    expect(screen.getByText('Positions')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(3)
    expect(screen.queryAllByText('Value').length).toBe(3)
    userEvent.click(screen.getByRole('button', {
      name: /previous-parameter/i
    }))
    expect(screen.getByText('Technology')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(1)
    expect(screen.queryAllByText('Value').length).toBe(1)
  });

  it("Display not empty parameter tree panel, multiple parameter, prev element and then next element", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    expect(screen.getByText('Positions')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(3)
    expect(screen.queryAllByText('Value').length).toBe(3)
    userEvent.click(screen.getByRole('button', {
      name: /previous-parameter/i
    }))
    expect(screen.getByText('Technology')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(1)
    expect(screen.queryAllByText('Value').length).toBe(1)
    userEvent.click(screen.getByRole('button', {
      name: /next-parameter/i
    }))
    expect(screen.getByText('Positions')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(3)
    expect(screen.queryAllByText('Value').length).toBe(3)
  });

  it("Create button not disabled after filling form", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    userEvent.selectOptions(screen.getByTestId('Index-select-create').children[0], "10")
    userEvent.selectOptions(screen.getByTestId('SensorName-select-create').children[0], "BGE02")
    expect(screen.getByRole('button', {
      name: /create/i
    })).not.toBeDisabled()
  });

  it("Create new table item, uses select", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    userEvent.selectOptions(screen.getByTestId('Index-select-create').children[0], "10")
    userEvent.selectOptions(screen.getByTestId('SensorName-select-create').children[0], "BGE02")
    userEvent.click(screen.getByRole('button', {
      name: /create/i
    }));

    expect(screen.queryAllByText('Name').length).toBe(4)
    expect(screen.queryAllByText('Value').length).toBe(4)
  });


  it("Create new table item uses select and prev element and then next element ", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    userEvent.selectOptions(screen.getByTestId('Index-select-create').children[0], "10")
    userEvent.selectOptions(screen.getByTestId('SensorName-select-create').children[0], "BGE02")
    userEvent.click(screen.getByRole('button', {
      name: /create/i
    }));

    expect(screen.queryAllByText('Name').length).toBe(4)
    expect(screen.queryAllByText('Value').length).toBe(4)
    userEvent.click(screen.getByRole('button', {
      name: /previous-parameter/i
    }))
    expect(screen.getByText('Technology')).toBeDefined()
    expect(screen.queryAllByText('Name').length).toBe(1)
    expect(screen.queryAllByText('Value').length).toBe(1)

    userEvent.click(screen.getByRole('button', {
      name: /next-parameter/i
    }))
    expect(screen.queryAllByText('Name').length).toBe(4)
    expect(screen.queryAllByText('Value').length).toBe(4)
  });

  it("Check when value is not array, then do not display create icon", () => {
    userEvent.click(screen.getByText('121050DT1AE1'))
    userEvent.click(screen.getByRole('button', {
      name: /next-parameter/i
    }))
    expect(screen.queryByRole('button', {
      name: /create/i
    })).toBeNull()
  });

  it("Do not preserve value when change tree item, when same structure", async () => {
    userEvent.click(screen.getByText('121050V01'));
    userEvent.type(screen.getByTestId('Name-input-create').children[0], 'Marjan Kaleta ubija kotleta')

    //@ts-ignore
    expect(screen.getByTestId('Name-input-create').children[0].value).toBe('Marjan Kaleta ubija kotleta')
    userEvent.click(screen.getByText('121050V02'))
    //@ts-ignore
    expect(screen.getByTestId('Name-input-create').children[0].value).not.toBe('Marjan Kaleta ubija kotleta')
  });

  it("Do not preserve index when change tree item, when not same structure", async () => {
    userEvent.click(screen.getByText('121050DT1AE1'));
    userEvent.click(screen.getByRole('button', {
      name: /next-parameter/i
    }))
    expect(screen.queryByText('Controller')).toBeDefined();
    userEvent.click(screen.getByText('121050DT1'))
    expect(screen.queryByText('FmList')).toBeDefined();
    expect(screen.queryByRole('button', {
      name: /next-parameter/i
    })).toBeNull()
  });
});
