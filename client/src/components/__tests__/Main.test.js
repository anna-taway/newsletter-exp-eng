import { render, screen } from '@testing-library/react';
import { create } from "react-test-renderer";
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';
import store from '../../app/store';
import Main from '../Main';

describe('Main app rendering/navigating', () => {
  test('Main app rendering/navigating', () => {
    const history = createMemoryHistory()
    render(
      <Provider store={store}>
          <Router history={history}>
              <Main />
          </Router>
      </Provider>
      
    )
    // verify page content for expected route
    expect(screen.getByText(/Some news about EE and QBE/i)).toBeInTheDocument()
  
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Subscribe/i), leftClick)
  
    // check that the content changed to the new page
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument()
  });

  test("Main component matches the snapshot", () => {
    const history = createMemoryHistory()
    const main = create(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    );
    expect(main.toJSON()).toMatchSnapshot();
  });
})

