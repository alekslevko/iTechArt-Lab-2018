import React from 'react';
import MovieInfo from '../views/MovieInfo';
import axios from 'axios';
import PhotosContainer from './PhotosContainer';
import CommentFormContainer from './CommentFormContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMovieInfo } from '../actions/index';

class MovieInfoContainer extends React.Component {
    state = {
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get(`http://localhost:49448/movie/getmovie/` + this.state.id)
            .then(response => {
                this.props.loadMovieInfo(response.data);
            });
    }

    render() {
        const { id, name, year, genre, description, country, producer, pictureUrl, photos } = this.props.movieInfo;

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

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovieInfo: bindActionCreators(loadMovieInfo, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.movieInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoContainer);