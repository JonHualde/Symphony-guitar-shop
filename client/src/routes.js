import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home/index.js';
import Layout from './component/HOC/layout.js';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Layout>
  )
}
  

export default Routes;
