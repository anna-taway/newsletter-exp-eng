import React from "react";
import App from "../App";
import { create } from "react-test-renderer";

import { Provider } from 'react-redux';
import store from '../../app/store';

describe("App component", () => {
  test("App component matches the snapshot", () => {
    const app = create(
      <Provider store={store}>
          <App />
      </Provider>
    );
    expect(app.toJSON()).toMatchSnapshot();
  });
});