import { CLEAR_ERROR_MESSAGE, HEADER_HANDLE_CLOSE, HEADER_HANDLE_MENU, IS_AUTH, SHOW_ERROR_MESSAGE,
   LOG_OUT, CLEAR_COMMENT_FIELD, ON_COMMENT_CHANGE, LOAD_MOVIES, LOAD_MOVIE_INFO, LOAD_COMMENTS, LOAD_USER_RATING, LOAD_AVERAGE_RATING } from './types';

export const headerHandleMenu = (anchorEl) => {
  return {
    type: HEADER_HANDLE_MENU,
    anchorEl
  }
}

export const headerHandleClose = () => {
  return {
    type: HEADER_HANDLE_CLOSE    
  }
}

export const isAuth = () => {
  return {
    type: IS_AUTH    
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT    
  }
}

export const showErrorMessage = (errorMessage) => {
  return {
    type: SHOW_ERROR_MESSAGE,
    errorMessage    
  }
}

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE
  }
}

export const clearCommentField = () => {
  return {
    type: CLEAR_COMMENT_FIELD
  }
}

export const onCommentChange = (message) => {
  return {
    type: ON_COMMENT_CHANGE,
    message
  }
}

export const loadMovies = (movies) => {
  return {
    type: LOAD_MOVIES,
    movies
  }
}

export const loadMovieInfo = (movieInfo) => {
  return {
    type: LOAD_MOVIE_INFO,
    movieInfo
  }
}

export const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}

export const loadUserRating = (rating) => {
  return {
    type: LOAD_USER_RATING,
    rating
  }
}

export const loadAverageRating = (averageRating) => {
  return {
    type: LOAD_AVERAGE_RATING,
    averageRating
  }
}