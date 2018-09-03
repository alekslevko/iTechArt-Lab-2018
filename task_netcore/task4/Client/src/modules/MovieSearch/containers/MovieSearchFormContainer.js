import React from 'react';
import MovieSearchForm from '../views/MovieSearchForm';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchMovies, onMovieSearchChange, clearMovieSearchField } from '../actions'
import { applicationRoutes } from '../../../Constants';

class MovieSearchFormContainer extends React.Component {
    onMovieSearchChange = (event) => {
        this.props.onMovieSearchChange(event.target.value);
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { movie } = this.props;

        searchMovies(this.props.dispatch, movie);

        this.props.clearMovieSearchField()
        this.props.history.push(applicationRoutes.moviesSearchResultRoute);
    }

    render() {
        const {movie} = this.props;
        
        return (
                <MovieSearchForm
                    onSubmit={this.onSubmit}
                    onMovieSearchChange={this.onMovieSearchChange}
                    movie={movie} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMovieSearchChange: bindActionCreators(onMovieSearchChange, dispatch),
        clearMovieSearchField: bindActionCreators(clearMovieSearchField, dispatch),
        dispatch
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.movieSearch,
        ...state.movieSearchForm
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieSearchFormContainer));