import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles'
import { Paper, Typography, withStyles } from '@material-ui/core';

const NotFound = ({ classes, errorMessage, haveMovieSearchErrors }) => {
    return (
        <Paper className={classes.notfound}>
            {
                !haveMovieSearchErrors ? <Typography variant="display1">
                    404 – страница не найдена
                </Typography> : <Typography variant="display1">
                    {errorMessage}
                </Typography>
            }
        </Paper>
    );
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);