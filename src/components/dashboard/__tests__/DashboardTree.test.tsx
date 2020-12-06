import React from "react";
import DashboardTree from "../DashboardTree";
import { render, screen } from "@testing-library/react";

import { DashboardProvider } from "../context";
import { homeFormSubmitTree } from "../../../../tests/responses";

import { HomeFormTreeResponse, HomeResponseTreeChildren } from "types";

const getNames = (
  nodes: HomeFormTreeResponse | HomeFormTreeResponse,
  names: string[]
) => {
  names.push(nodes.name);
  Array.isArray(nodes.children)
    ? nodes.children.map((node: HomeResponseTreeChildren) =>
        getNames(node, names)
      )
    : null;
  return names;
};

describe("DashboardTree", () => {
  beforeEach(() => {
    return render(
      <DashboardProvider>
        <DashboardTree tree={homeFormSubmitTree} />
      </DashboardProvider>
    );
  });
  it("initial render", () => {
    const names = getNames(homeFormSubmitTree, []);
    names.forEach((singleName) => {
      expect(screen.queryByText(singleName)).toBeDefined();
    });
  });
});
