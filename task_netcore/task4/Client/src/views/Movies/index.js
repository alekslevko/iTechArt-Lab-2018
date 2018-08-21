import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { applicationRoutes } from '../../Constants';
import MoviesContainer from '../../containers/MoviesContainer';
import MovieInfoContainer from '../../containers/MovieInfoContainer';

const Movies = () => (
  <Switch>
    <Route exact path={applicationRoutes.moviesRoute} component={MoviesContainer}/>
    <Route path={applicationRoutes.movieInfoRoute} component={MovieInfoContainer}/>
  </Switch>
)

export default Movies