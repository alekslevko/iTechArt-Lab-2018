import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { applicationRoutes } from '../Constants';
import MoviesContainer from '../modules/MoviesList/containers/MoviesContainer';
import MovieInfoContainer from '../modules/MovieInfo/containers/MovieInfoContainer';

const MoviesRouter = () => (
  <Switch>
    <Route exact path={applicationRoutes.moviesRoute} component={MoviesContainer}/>
    <Route path={applicationRoutes.movieInfoRoute} component={MovieInfoContainer}/>
  </Switch>
)

export default MoviesRouter