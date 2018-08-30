import { webApiRoutes } from '../../../Constants';
import axios from 'axios';
import { REQUESTED_MOVIE_INFO, REQUESTED_MOVIE_INFO_SUCCEEDED, REQUESTED_MOVIE_INFO_FAILED } from './types';

export const requestMovieInfo = () => {
    return {
      type: REQUESTED_MOVIE_INFO
    }
  };
  
  export const requestMovieInfoSuccess = (movieInfo) => {
    return {
      type: REQUESTED_MOVIE_INFO_SUCCEEDED,
      movieInfo
    }
  };
  
  export const requestMovieInfoError = () => {
    return {
      type: REQUESTED_MOVIE_INFO_FAILED,
    }
  };
  
  export const axiosMovieInfo = (dispatch, id) => {
    dispatch(requestMovieInfo());

    return axios.get(webApiRoutes.loadMovieInfoRoute + id)
      .then(response => {
        dispatch(requestMovieInfoSuccess(response.data));
      })
      .catch(errors => {
        dispatch(requestMovieInfoError(errors.data));
      })
  };