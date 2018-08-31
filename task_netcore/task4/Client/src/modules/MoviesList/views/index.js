import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles'
import { Typography, withStyles, Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Movie = ({ classes, year, name, genre, rating, picture, country, id }) => {
    return (
        <Card className={classes.card}>
            <img src={picture} className={classes.picture} alt='Poster' />
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.addInfo}>Genre: {genre}</Typography>
            <Typography className={classes.addInfo}>Year: {year}</Typography>
            <Typography className={classes.addInfo}>Country: {country}</Typography>
            <Typography className={classes.addInfo}>Raiting:  {rating === 0 && 'No rating'} {rating !== 0 && rating}</Typography>
            <Link to={`/movies/${id}`} className={classes.link}>
                <Button color='primary' variant='contained' className={classes.button}>
                    More
                </Button>
            </Link>
        </Card>
    );
}

Movie.propTypes = {
    classes: PropTypes.object.isRequired,
    genre: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    picture: PropTypes.string,
    id: PropTypes.number
};

export default withStyles(styles)(Movie);