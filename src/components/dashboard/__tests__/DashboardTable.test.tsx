import React from "react";
import { render, screen } from "@testing-library/react";
import { homeFormSubmitWithIds } from "../../../../tests/responses";

import DashboardTable from "../DashboardTable";

describe("DashboardTable", () => {
  it("initial render", () => {
    render(<DashboardTable rows={homeFormSubmitWithIds} />);
    expect(screen.queryAllByText("operandIdentifier")).not.toBeNull();
    expect(screen.queryAllByText("address")).not.toBeNull();
    expect(screen.queryAllByText("name")).not.toBeNull();
    expect(screen.queryAllByText("dataType")).not.toBeNull();
    expect(screen.queryAllByText("comment")).not.toBeNull();
    expect(screen.queryAllByText("accessibleFromHmi")).not.toBeNull();
    expect(screen.queryAllByText("visibleInHmiEngineering")).not.toBeNull();
    expect(screen.queryAllByText("writableFromHmi")).not.toBeNull();
    expect(screen.queryAllByText("ID")).not.toBeNull();
  });
});
