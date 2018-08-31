import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/index';
import Movie from '../views';
import MovieSearchFormContainer from '../../MovieSearch/containers/MovieSearchFormContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

class MoviesContainer extends React.Component {
    componentDidMount() {
        getMovies(this.props.dispatch);
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
        const { movies, isLoading } = this.props;

        return (
            <div>
                {
                    <div>
                        {
                            isLoading ? <CircularProgress /> :                                
                                <div>
                                    <MovieSearchFormContainer />
                                    <div className='movieContainer'>
                                        {movies.map(this.initMovieComponent)}
                                    </div>
                                </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.movies
    }
}

export default connect(mapStateToProps)(MoviesContainer);