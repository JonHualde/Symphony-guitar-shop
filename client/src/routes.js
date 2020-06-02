import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home/index.js';
import Layout from './component/HOC/layout.js';
import RegisterLogin from './component/Register_Login/index.js';
import Register from './component/Register_Login/register.js'

const Routes = () => {
  return (
    <Layout>
      <Switch>  
        <Route exact path='/register_login' component={RegisterLogin}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  )
}
  

export default Routes;
