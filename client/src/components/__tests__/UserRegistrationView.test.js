import React from "react";
import UserRegistrationView from "../UserRegistrationView";
import { create } from "react-test-renderer";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../../app/store';

describe("UserRegistrationView component", () => {
  test("UserRegistrationView component matches the snapshot", () => {
    const history = createMemoryHistory()
    const userRegistrationView = create(
        <Provider store={store}>
            <Router history={history}>
                <UserRegistrationView />
            </Router>
        </Provider>
    );
    expect(userRegistrationView.toJSON()).toMatchSnapshot();
  });
});