import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMovies } from '../actions/index';
import MoviesAll from '../views/MoviesAll';

class MoviesContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:49448/movie/getmovies`)
            .then(response => {
                this.props.loadMovies(response.data);
            })
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
                description={i.description} />
        );
    };

    render() {
        const { movies } = this.props;
        console.log(movies);
        return (
            <div className='movieContainer'>
                {movies.map(this.eachMovie)}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: bindActionCreators(loadMovies, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);