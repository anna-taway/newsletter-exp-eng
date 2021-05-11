import React from "react";
import ProductListView from "../ProductsListView";
import { create } from "react-test-renderer";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../../app/store';

describe("ProductListView component", () => {
  test("ProductListView component matches the snapshot", () => {
    const history = createMemoryHistory()
    const productsListView = create(
        <Provider store={store}>
            <Router history={history}>
                <ProductListView />
            </Router>
        </Provider>
    );
    expect(productsListView.toJSON()).toMatchSnapshot();
  });
});