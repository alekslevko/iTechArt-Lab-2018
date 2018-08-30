import React from 'react';
import MovieSearchForm from '../views/MovieSearchForm';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { axiosMovieSearch, onMovieSearchChange, clearMovieSearchField } from '../actions'
import { applicationRoutes } from '../../../Constants';


class MovieSearchFormContainer extends React.Component {
    onMovieSearchChange = (event) => {
        let value = event.target.value;
        this.props.onMovieSearchChange(value);
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { movie } = this.props;

        axiosMovieSearch(this.props.dispatch, movie);

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