import React from "react";
import DashboardTable from "../DashboardTable";
import { render, screen, } from "@testing-library/react";

import { homeFormSubmitWithIds } from "../../../../tests/responses";

describe("DashboardTable", () => {
  it("initial render", () => {
    render(<DashboardTable rows={homeFormSubmitWithIds} />);
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
