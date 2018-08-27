import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Typography, withStyles } from '@material-ui/core';
import ReactStars from 'react-stars';

const Rating = ({ classes, onRatingChange, alreadyRated, value, averageRating, haveErrors, errorMessage}) => {
    return (
        <div>
            <Typography className={classes.ratingInfo}>
                Raiting: {averageRating === 0 && 'No rating'}
                        {averageRating !== 0 && averageRating}
            </Typography>
            <ReactStars
                count={10}
                onChange={onRatingChange}
                size={24}
                edit={!alreadyRated}
                value={averageRating}
                color2={'#ffd700'} />
            {
                alreadyRated && <Typography className={classes.ratingInfo}>
                    Your rating is: {value}
                </Typography>
            }
            {
				haveErrors && <Typography className={classes.errorMessage}>
					{errorMessage}
				</Typography>
			}
        </div>
    );
}

Rating.propTypes = {
    classes: PropTypes.object.isRequired,
    genre: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    picture: PropTypes.string,
    description: PropTypes.string,
    producer: PropTypes.string,
    id: PropTypes.number,
    onRatingChange: PropTypes.func
};

export default withStyles(styles)(Rating);