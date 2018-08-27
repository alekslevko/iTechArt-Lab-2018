import React from 'react';
import MovieInfo from '../views/MovieInfo';
import axios from 'axios';
import PhotosContainer from './PhotosContainer';
import CommentFormContainer from './CommentFormContainer';

class MovieInfoContainer extends React.Component {
    state = {
        movieInfo: {
            photos: []
        },
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get(`http://localhost:49448/movie/getmovie/` + this.state.id)
            .then(response => {
                this.setState({ movieInfo: response.data });
            });
    }

    render() {
        const { id, name, year, genre, description, country, producer, pictureUrl, photos } = this.state.movieInfo;
        return (
            <div>
                <MovieInfo
                    id={id}
                    name={name}
                    year={year}
                    genre={genre}
                    description={description}
                    country={country}
                    producer={producer}
                    picture={pictureUrl} />
                <PhotosContainer
                    id={this.state.id}
                    photos={photos} />
                <CommentFormContainer id={this.state.id} />
            </div>
        )
    }

}

export default MovieInfoContainer;