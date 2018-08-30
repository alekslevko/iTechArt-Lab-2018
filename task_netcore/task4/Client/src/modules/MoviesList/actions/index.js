import { webApiRoutes } from '../../../Constants';
import axios from 'axios';
import { REQUESTED_MOVIES, REQUESTED_MOVIES_SUCCEEDED, REQUESTED_MOVIES_FAILED } from './types';

export const requestMovies = () => {
    return {
      type: REQUESTED_MOVIES
    }
  };
  
  export const requestMoviesSuccess = (movies) => {
    return {
      type: REQUESTED_MOVIES_SUCCEEDED,
      movies
    }
  };
  
  export const requestMoviesError = (errorMessage) => {
    return {
      type: REQUESTED_MOVIES_FAILED,
      errorMessage
    }
  };
  
  export const axiosMovies = (dispatch) => {
    dispatch(requestMovies());

    return axios.get(webApiRoutes.loadMoviesRoute)
      .then(response => {
        dispatch(requestMoviesSuccess(response.data));
      })
      .catch(errors => {
        dispatch(requestMoviesError(errors.response.data));
      })
  };