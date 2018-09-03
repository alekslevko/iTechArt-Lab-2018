import React from 'react';
import Movie from '../../MoviesList/views';
import { connect } from 'react-redux';
import NotFound from '../views/NotFound';
import { clearErrorMessage } from '../actions';
import { bindActionCreators } from 'redux';

class MovieSearchResultContainer extends React.Component {
    componentDidMount() {
        this.props.clearErrorMessage();
    }

    initMovieComponent = i => {
        return (
            <Movie
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
        const { haveMovieSearchErrors, errorMessage } = this.props

        return (
            <div>
                {
                    !haveMovieSearchErrors ? <div className='movieContainer'>
                        {this.props.movies.map(this.initMovieComponent)}
                    </div> : <NotFound
                        haveMovieSearchErrors={haveMovieSearchErrors}
                        errorMessage={errorMessage} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.movieSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchResultContainer);