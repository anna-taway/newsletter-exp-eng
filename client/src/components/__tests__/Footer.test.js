import React from "react";
import Footer from "../Footer";
import { create } from "react-test-renderer";

describe("Footer component", () => {
  test("Footer component matches the snapshot", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});