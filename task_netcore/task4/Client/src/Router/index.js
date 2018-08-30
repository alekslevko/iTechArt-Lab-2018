import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from '../modules/MovieSearch/views/NotFound';
import AccountFormContainer from '../modules/AccountForm/containers/AccountFormContainer';
import { applicationRoutes } from '../Constants';
import MovieSearchResultContainer from '../modules/MovieSearch/containers/MovieSearchResultContainer';
import MoviesRouter from './MovieRouter';

const Main = () => (
    <main>
        <Switch>
            <Route exact path={applicationRoutes.defaultRoute} render={() => <Redirect to={applicationRoutes.moviesRoute} />} />            
            <Route path={applicationRoutes.registerFormRoute} component={AccountFormContainer} />
            <Route path={applicationRoutes.loginFormRoute} component={AccountFormContainer} />
            <Route path={applicationRoutes.notFoundRoute} component={NotFound} />
            <Route path={applicationRoutes.moviesRoute} component={MoviesRouter} />
            <Route path={applicationRoutes.moviesSearchResultRoute} component={MovieSearchResultContainer} /> 
            <Route path={applicationRoutes.errorRoute} >
                <Redirect to={applicationRoutes.notFoundRoute} />
            </Route>
        </Switch>
    </main>
);

export default (Main);