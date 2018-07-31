import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About/index';
import CountersParentContainer from '../../containers/CountersParentContainer';
import NotFound from '../NotFound/index';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/iTechArt-Lab-2018/' />} />
            <Route exact path='/iTechArt-Lab-2018/' component={null} />
            <Route path='/iTechArt-Lab-2018/about' component={About} />
            <Route path='/iTechArt-Lab-2018/counters' component={CountersParentContainer} />
            <Route path='/iTechArt-Lab-2018/404' component={NotFound} />
            <Route path='/*' >
                <Redirect to='/iTechArt-Lab-2018/404' />
            </Route>
        </Switch>
    </main>
);

export default (Main);