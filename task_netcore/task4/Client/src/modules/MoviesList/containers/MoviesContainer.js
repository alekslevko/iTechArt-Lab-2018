import React from 'react';
import { connect } from 'react-redux';
import { axiosMovies } from '../actions/index';
import Movies from '../views';
import MovieSearchFormContainer from '../../MovieSearch/containers/MovieSearchFormContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

class MoviesContainer extends React.Component {
    componentDidMount() {
        axiosMovies(this.props.dispatch);
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
        const { movies, loading } = this.props;

        return (
            <div>
                {
                    <div>
                        {
                            loading ? <CircularProgress /> :                                
                                <div>
                                    <MovieSearchFormContainer />
                                    <div className='movieContainer'>
                                        {movies.map(this.eachMovie)}
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