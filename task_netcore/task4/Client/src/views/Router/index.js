import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from '../NotFound';
import RegisterReduxFormContainer from '../../containers/RegisterReduxFormContainer';
import { applicationRoutes } from '../../Constants';
import MovieSearchResultContainer from '../../containers/MovieSearchResultContainer';
import Movies from '../Movies';

const Main = () => (
    <main>
        <Switch>
            <Route exact path={applicationRoutes.defaultRoute} render={() => <Redirect to={applicationRoutes.moviesRoute} />} />            
            <Route path={applicationRoutes.registerReduxFormRoute} component={RegisterReduxFormContainer} />
            <Route path={applicationRoutes.loginReduxFormRoute} component={RegisterReduxFormContainer} />
            <Route path={applicationRoutes.notFoundRoute} component={NotFound} />
            <Route path={applicationRoutes.moviesRoute} component={Movies} />
            <Route path={applicationRoutes.moviesSearchResultRoute} component={MovieSearchResultContainer} /> 
            <Route path={applicationRoutes.errorRoute} >
                <Redirect to={applicationRoutes.notFoundRoute} />
            </Route>
        </Switch>
    </main>
);

export default (Main);