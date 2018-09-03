import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import SendIcon from '@material-ui/icons/Search';
import { Typography, withStyles, Card, Button, TextField } from '@material-ui/core';

const MovieSearchForm = ({ classes, movie, onSubmit, onMovieSearchChange  }) => {
    return (
        <Card className={classes.movieSearchFormContainer}>
            <Typography className={classes.title}>
                Find film what you want
            </Typography>
            <form onSubmit={onSubmit} className={classes.movieSearchForm}>
                <TextField
                    onChange={onMovieSearchChange}
                    value={movie}
                    required
                    id='comment'
                    label='Movie' />
                <Button color='primary' variant='outlined' className={classes.button} type="submit">
                    <SendIcon className={classes.sendIcon} />
                </Button>
            </form>
        </Card>
    );
}

MovieSearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
    movie: PropTypes.string,
    onSubmit: PropTypes.func,
    onMovieSearchChange: PropTypes.func
};

export default withStyles(styles)(MovieSearchForm);