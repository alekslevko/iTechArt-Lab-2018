import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

const Success = ({ mail, password }) => {
    return (
        <div>
            <Paper>
                <Typography variant='display1'>
                    {mail}
                </Typography>
                <Typography variant='display1'>
                    {password} 
                </Typography>
            </Paper>
        </div>
    );
}

Success.propTypes = {
    mail: PropTypes.string,
    password: PropTypes.string
};

export default (Success);