import React from 'react';
import MovieInfo from '../views';
import PhotosContainer from '../../Photos/containers/PhotosContainer';
import CommentFormContainer from '../../Comments/containers/CommentFormContainer';
import { connect } from 'react-redux';
import { axiosMovieInfo } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';

class MovieInfoContainer extends React.Component {
    state = {
        id: this.props.match.params.id
    }

    componentDidMount() {
        axiosMovieInfo(this.props.dispatch, this.state.id)
    }

    render() {
        const { id, name, year, genre, description, country, producer, pictureUrl, photos } = this.props.movieInfo;
        const { loading } = this.props;
        
        return (
            <div>
                {
                    loading ? <CircularProgress />
                        : <div>
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
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.movieInfo
    }
}

export default connect(mapStateToProps)(MovieInfoContainer);