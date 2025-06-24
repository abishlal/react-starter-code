import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render correctly", () => {
    render(<App />);

    expect(screen.getByText("Welcome Professor X!!!")).toBeInTheDocument();
  });
});
