import React from "react";
import Header from "../Header";
import { create } from "react-test-renderer";

describe("Header component", () => {
  test("Header component matches the snapshot", () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});