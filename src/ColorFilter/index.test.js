import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ColorFilter from "./index";

let container = null;
jest.mock("../Store/store", () => ({
  useStore: jest.fn(() => [{}, () => {}])
}));

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders without crashing", () => {
  act(() => {
    render(<ColorFilter color="#ff0000" />, container);
  });
});
