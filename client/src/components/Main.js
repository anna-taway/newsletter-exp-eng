import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsListView from './ProductsListView';
import UserRegistrationView from './UserRegistrationView';

const Main = () => {
  return (
    <Switch>
        <Route path="/" exact component={ProductsListView}></Route>
        <Route path="/user" exact component={UserRegistrationView}></Route>
    </Switch>
  )
}

export default Main;


