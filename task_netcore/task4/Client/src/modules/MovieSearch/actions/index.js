import { webApiRoutes } from '../../../Constants';
import axios from 'axios';
import { REQUESTED_MOVIE_SEARCH, REQUESTED_MOVIE_SEARCH_FAILED, REQUESTED_MOVIE_SEARCH_SUCCEEDED, CLEAR_MOVIE_SEARCH_FIELD, ON_MOVIE_SEARCH_CHANGE, CLEAR_ERROR_MESSAGE } from './types';

export const requestMovieSearch = () => {
    return {
      type: REQUESTED_MOVIE_SEARCH
    }
  };
  
  export const requestMovieSearchSuccess = (movies) => {
    return {
      type: REQUESTED_MOVIE_SEARCH_SUCCEEDED,
      movies
    }
  };
  
  export const requestMovieSearchError = (errorMessage) => {
    return {
      type: REQUESTED_MOVIE_SEARCH_FAILED,
      errorMessage
    }
  };

  export const clearMovieSearchField = () => {
    return {
      type: CLEAR_MOVIE_SEARCH_FIELD
    }
  }

  export const clearErrorMessage = () => {
    return {
      type: CLEAR_ERROR_MESSAGE
    }
  }
  
  export const onMovieSearchChange = (movie) => {
    return {
      type: ON_MOVIE_SEARCH_CHANGE,
      movie
    }
  }
  
  export const axiosMovieSearch = (dispatch, movie) => {
    dispatch(requestMovieSearch());

    return axios.get(webApiRoutes.searchMoviesRoute + movie)
      .then(response => {
        dispatch(requestMovieSearchSuccess(response.data));
      })
      .catch(errors => {
        dispatch(requestMovieSearchError(errors.response.data));
      })
  };