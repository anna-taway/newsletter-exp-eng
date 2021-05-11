import React from "react";
import Products from "../products/Products";
import { create } from "react-test-renderer";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../../app/store';

describe("Products component", () => {

  test("Products component", () => {
    const history = createMemoryHistory()
    const products = create(
        <Provider store={store}>
            <Router history={history}>
                <Products />
            </Router>
        </Provider>
    )
    expect(products.toJSON()).toMatchSnapshot();
  });

});