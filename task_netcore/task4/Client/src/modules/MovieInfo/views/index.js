import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Typography, withStyles, Card } from '@material-ui/core';
import RatingContainer from '../../Rating/containers/RatingContainer';
import CommentFormContainer from '../../Comments/containers/CommentFormContainer';
import PhotosContainer from '../../Photos/containers/PhotosContainer';

const MovieInfo = ({ classes, year, name, genre, picture, country, producer, description, id, photos }) => {
    return (
        <div>
            <div className={classes.movieInfoContainer}>
                <Card className={classes.card}>
                    <img src={picture} className={classes.picture} alt='Poster' />
                    <Typography className={classes.name}>{name}</Typography>
                    <div className={classes.addInfoContainer}>
                        <Typography className={classes.addInfo}>Genre: {genre}</Typography>
                        <Typography className={classes.addInfo}>Year: {year}</Typography>
                        <Typography className={classes.addInfo}>Country: {country}</Typography>
                        <Typography className={classes.addInfo}>Producer: {producer}</Typography>
                        <RatingContainer id={id} />
                    </div>
                    <Typography className={classes.description}>{description}</Typography>
                </Card>
            </div>
            <PhotosContainer
                id={id}
                photos={photos} />
            <CommentFormContainer id={id} />
        </div>
    );
}

MovieInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    genre: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    picture: PropTypes.string,
    description: PropTypes.string,
    producer: PropTypes.string,
    id: PropTypes.number,
    ratingChanged: PropTypes.func
};

export default withStyles(styles)(MovieInfo);