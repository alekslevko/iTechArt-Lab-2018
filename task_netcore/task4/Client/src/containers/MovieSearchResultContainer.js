import React from 'react';
import MoviesAll from '../views/MoviesAll';
import { connect } from 'react-redux';
import NotFound from '../views/NotFound';
import { clearErrorMessage } from '../actions';
import { bindActionCreators } from 'redux';

class MovieSearchResultContainer extends React.Component {
    componentDidMount() {
        this.props.clearErrorMessage();
    }

    eachMovie = i => {
        return (
            <MoviesAll
                name={i.name}
                picture={i.pictureUrl}
                id={i.id}
                country={i.country}
                rating={i.rating}
                genre={i.genre}
                year={i.year}
                description={i.description}
                key={i + i.id} />
        );
    };

    render() {
        const { haveMovieErrors, errorMessage } = this.props

        return (
            <div>
                {
                    !haveMovieErrors && <div className='movieContainer'>
                        {this.props.movies.map(this.eachMovie)}
                    </div>
                }
                {
                    haveMovieErrors && <NotFound
                    haveMovieErrors={haveMovieErrors} 
                    errorMessage={errorMessage} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.movieSearchResult,
        ...state.errorMovieSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchResultContainer);