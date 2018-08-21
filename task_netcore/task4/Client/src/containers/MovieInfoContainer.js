import React from 'react';
import MovieInfo from '../views/MovieInfo';
import axios from 'axios';
import PhotosContainer from './PhotosContainer';

class MovieInfoContainer extends React.Component {
    state = {
        movieInfo: [],
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get(`http://localhost:50834/movie/getmovie/` + this.state.id)
            .then(response => {
                this.setState({ movieInfo: response.data });
            })
    }

    render() {
        const { id, name, year, genre, description, country, rating, producer, pictureUrl } = this.state.movieInfo;
        return (
            <div>
                <MovieInfo
                    id={id}
                    name={name}
                    year={year}
                    genre={genre}
                    description={description}
                    country={country}
                    rating={rating}
                    producer={producer}
                    picture={pictureUrl}
                    ratingChanged={this.ratingChanged} />
                <PhotosContainer id={this.state.id} />
            </div>
        )
    }

}

export default MovieInfoContainer;