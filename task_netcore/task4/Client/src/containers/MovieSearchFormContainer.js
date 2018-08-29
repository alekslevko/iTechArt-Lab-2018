import React from 'react';
import MovieSearchForm from '../views/MovieSearchForm';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearMovieSearchField, onMovieSearchChange, loadSearchResultMovies, showErrorMessage } from '../actions'
import { applicationRoutes, webApiRoutes } from '../Constants';
import axios from 'axios';

class MovieSearchFormContainer extends React.Component {
    send = (movie) => {
        axios.get(webApiRoutes.searchMoviesRoute + movie)
            .then(response => {
                this.props.loadSearchResultMovies(response.data);
                this.props.clearMovieSearchField();
            })
            .catch(errors => {
                this.onFail(errors);
            })
    }

    onMovieSearchChange = (event) => {
        let value = event.target.value;
        this.props.onMovieSearchChange(value);
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { movie } = this.props;

        this.send(movie);
        this.props.history.push(applicationRoutes.moviesSearchResultRoute);
    }

    onFail = (errors) => {
        let value;

        if (errors.response !== undefined) {
            value = errors.response.data;
        } else {
            value = "Server is not responding "
        }

        this.props.showErrorMessage(value);
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
        loadSearchResultMovies: bindActionCreators(loadSearchResultMovies, dispatch),
        showErrorMessage: bindActionCreators(showErrorMessage, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.movieSearchForm,
        ...state.errorMovieSearch
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieSearchFormContainer));