import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Typography, withStyles, Card } from '@material-ui/core';
import ReactStars from 'react-stars';

const MovieInfo = ({ classes, year, name, genre, rating, picture, country, producer, description, ratingChanged }) => {
    return (
        <div className={classes.movieInfoContainer}>
            <Card className={classes.card}>
                <img src={picture} className={classes.picture} alt='Poster' />
                <Typography className={classes.name}>{name}</Typography>
                <div className={classes.addInfoContainer}>
                    <Typography className={classes.addInfo}>Genre: {genre}</Typography>
                    <Typography className={classes.addInfo}>Year: {year}</Typography>
                    <Typography className={classes.addInfo}>Country: {country}</Typography>
                    <Typography className={classes.addInfo}>Producer: {producer}</Typography>
                    <Typography className={classes.addInfo}>Raiting: {rating === 0 && 'No rating'}
                        {rating !== 0 && rating}
                        <ReactStars
                            count={10}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                    </Typography>
                </div>
                <Typography className={classes.description}>{description}</Typography>
            </Card>
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