import React from "react";
import DashboardTable from "../DashboardTable";
import { render, screen, } from "@testing-library/react";
import { DashboardProvider } from "../context";

import { homeFormSubmitWithIds } from "../../../../tests/responses";


describe("DashboardTable", () => {
  it("initial render", () => {
    const initial = {
      tree: { Name: "", Children: [] },
      rows: homeFormSubmitWithIds,
      selectedLeaf: null,
    }
    render(
      <DashboardProvider initial={initial}>
        <DashboardTable />
      </DashboardProvider>
    );
    expect(screen.queryAllByText("ID",)).not.toBeNull();
    expect(screen.queryAllByText("Operand Identifier",)).not.toBeNull();
    expect(screen.queryAllByText("Adress",)).not.toBeNull();
    expect(screen.queryAllByText("Name",)).not.toBeNull();
    expect(screen.queryAllByText("Data Type",)).not.toBeNull();
    expect(screen.queryAllByText("Comment",)).not.toBeNull();
    expect(screen.queryAllByText("Accessible From HMI",)).not.toBeNull();
    expect(screen.queryAllByText("Visible In HMI Engineering",)).not.toBeNull();
    expect(screen.queryAllByText("Writable From HMI",)).not.toBeNull();
  });
});
