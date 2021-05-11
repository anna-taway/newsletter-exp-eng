import React from "react";
import UserRegistration from "../userRegistration/UserRegistration";
import { create } from "react-test-renderer";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../../app/store';

describe("UserRegistration component", () => {
  test("UserRegistration component", () => {
    const history = createMemoryHistory()
    const userRegistration = create(
        <Provider store={store}>
            <Router history={history}>
                <UserRegistration />
            </Router>
        </Provider>
    )
    expect(userRegistration.toJSON()).toMatchSnapshot();
  });
});