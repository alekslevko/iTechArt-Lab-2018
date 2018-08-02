import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About/index';
import CountersParentContainer from '../../containers/CountersParentContainer';
import NotFound from '../NotFound/index';
import LoginContainer from '../../containers/LoginContainer';
import LoginReduxContainer from '../../containers/LoginReduxContainer';
import Success from '../Success/index';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/iTechArt-Lab-2018/' />} />
            <Route exact path='/iTechArt-Lab-2018/' component={null} />
            <Route path='/iTechArt-Lab-2018/about' component={About} />
            <Route path='/iTechArt-Lab-2018/counters' component={CountersParentContainer} />
            <Route path='/iTechArt-Lab-2018/login' component={LoginContainer} />
            <Route path='/iTechArt-Lab-2018/login-redux/success' component={Success} />
            <Route path='/iTechArt-Lab-2018/login-redux' component={LoginReduxContainer} />            
            <Route path='/iTechArt-Lab-2018/404' component={NotFound} />
            <Route path='/*' >
                <Redirect to='/iTechArt-Lab-2018/404' />
            </Route>
        </Switch>
    </main>
);

export default (Main);