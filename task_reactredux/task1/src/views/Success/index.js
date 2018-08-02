import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        mail: state.mail.mail,
        password: state.password.password
    }
};

export default connect(mapStateToProps)(Success);