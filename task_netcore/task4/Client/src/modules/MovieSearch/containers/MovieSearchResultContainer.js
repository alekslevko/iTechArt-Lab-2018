import React from 'react';
import Movies from '../../MoviesList/views';
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
            <Movies
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
                        {this.props.movies.map(this.eachMovie)}
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