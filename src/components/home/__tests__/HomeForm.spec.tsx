import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomeForm from "../HomeForm";

describe("HomeForm", () => {
  it("initial render", () => {
    const handleSubmit = jest.fn();
    render(<HomeForm handleSubmit={handleSubmit} />);
    expect(screen.getByText("Project Name")).toBeInTheDocument();
    expect(screen.getByText(/Create/i).closest("button")).toHaveAttribute(
      "disabled"
    );
  });

  it("Fill Form and submit", async () => {
    const handleSubmit = jest.fn();
    render(<HomeForm handleSubmit={handleSubmit} />);
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });

    const fileInput = screen.getByLabelText("Upload File");
    const projectNameInput = screen.getByTestId("projectName");
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.change(projectNameInput, { target: { value: "Project Name" } });

    await waitFor(() => {
      fireEvent.submit(screen.getByTestId("home-form"));
    });

    expect(screen.getByText(/Create/i).closest("button")).not.toHaveAttribute(
      "disabled"
    );
    expect(handleSubmit).toBeCalled();
  });

  it("Remove file from list", async () => {
    const handleSubmit = jest.fn();
    render(<HomeForm handleSubmit={handleSubmit} />);
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });

    const fileInput = screen.getByLabelText("Upload File");
    await waitFor(() => {
      fireEvent.change(fileInput, { target: { files: [file] } });
    });
    expect(screen.queryByText("chucknorris.png")).not.toBeNull();

    await waitFor(() => {
      fireEvent.click(screen.getByTestId("file-0"));
    });
    expect(screen.queryByText("chucknorris.png")).toBeNull();
  });
});
