import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles'
import { Paper, Typography, withStyles } from '@material-ui/core';

const NotFound = ({classes}) => {
    return(
        <Paper className={classes.notfound}>
            <Typography variant="display1">
                404 – страница не найдена
            </Typography>
        </Paper>
    );
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NotFound);