import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home/index.js';
import Layout from './component/HOC/layout.js';
import RegisterLogin from './component/Register_Login/index.js';
import Register from './component/Register_Login/register.js'
import Auth from './component/HOC/auth.js';

import UserDashboard from './component/User/index.js'


const Routes = () => {
  return (
    <Layout>
      <Switch>  
        <Route exact path='/user/dashboard' component={Auth(UserDashboard, true)}/>
        <Route exact path='/register_login' component={Auth(RegisterLogin, false)}/>
        <Route exact path='/register' component={Auth(Register, false)}/>
        <Route exact path='/' component={Auth(Home, null)} />
      </Switch>
    </Layout>
  )
}
  

export default Routes;
