import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Router from './Route';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard'
const Routes: React.FC = () => (

    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
        <Route path="/reset-password" component={ResetPassword}/>
        <Route path="/dashboard" component={Dashboard} isPrivate/>
    </Switch>
);

export default Routes;