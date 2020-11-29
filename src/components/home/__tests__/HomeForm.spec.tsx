import React from "react";
import { render, screen } from "@testing-library/react";
import HomeForm from "../HomeForm";

describe("HomeForm", () => {
  it("initial render", () => {
    render(<HomeForm />);
    expect(screen.getByText("Project Name")).toBeInTheDocument();
    expect(screen.getByText("EPLAN Tags")).toBeInTheDocument();
  });
});
