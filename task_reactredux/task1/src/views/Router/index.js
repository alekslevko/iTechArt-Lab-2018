import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About/index';
import CountersParentContainer from '../../containers/CountersParentContainer';
import NotFound from '../NotFound';
import LoginContainer from '../../containers/LoginContainer';
import LoginReduxContainer from '../../containers/LoginReduxContainer';
import LoginReduxFormContainer from '../../containers/LoginReduxFormContainer';
import SuccessContainer from '../../containers/SuccessContainer';
import PrivateRoute from '../PrivateRoute';
import { applicationRoutes } from '../../Constants';

const Main = () => (
    <main>
        <Switch>
            <Route exact path={applicationRoutes.defaultRoute} render={() => <Redirect to={applicationRoutes.startPageRoute} />} />
            <Route exact path={applicationRoutes.startPageRoute} component={null} />
            <Route path={applicationRoutes.aboutRoute} component={About} />
            <Route path={applicationRoutes.countersRoute} component={CountersParentContainer} />
            <Route path={applicationRoutes.loginRoute} component={LoginContainer} />
            <Route path={applicationRoutes.loginReduxSuccessRoute} component={SuccessContainer} />
            <Route path={applicationRoutes.loginReduxRoute} component={LoginReduxContainer} />
            <PrivateRoute path={applicationRoutes.loginReduxFormSuccessRoute} redirect={applicationRoutes.loginReduxFormRoute} component={SuccessContainer} />
            <Route path={applicationRoutes.loginReduxFormRoute} component={LoginReduxFormContainer} />
            <Route path={applicationRoutes.notFoundRoute} component={NotFound} />
            <Route path={applicationRoutes.errorRoute} >
                <Redirect to={applicationRoutes.notFoundRoute} />
            </Route>
        </Switch>
    </main>
);

export default (Main);