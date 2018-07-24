import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles'
import Button from '@material-ui/core/Button';
import { Typography, withStyles, Paper } from '@material-ui/core';

let Counter = ({ increment, decrement, reset, count, classes}) => {
    return (
        <div>
            <Paper className={classes.root} elevation={8}>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => increment()}>Increment</Button>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => decrement()}>Decrement</Button>
                <Button className={classes.button} variant="contained" color="secondary" onClick={() => reset()}>Reset </Button>
                <Typography variant="display2" component="p">{count}</Typography>
            </Paper>
        </div>
    );
}

Counter.PropTypes = {
    classes: PropTypes.object.isRequired,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    reset: PropTypes.func,
    count: PropTypes.number
}

export default withStyles(styles)(Counter);