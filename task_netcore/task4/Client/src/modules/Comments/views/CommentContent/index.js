import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Typography, withStyles, Card, Avatar } from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const CommentContent = ({ classes, message, userName, date }) => {
    return (
        <Card className={classes.commentContentContainer}>
            <Avatar className={classes.avatar}>
                <PersonPinIcon className={classes.icon} />
            </Avatar>
            <Typography className={classes.userName}>{userName}</Typography>
            <Typography className={classes.message}>{message}</Typography>
            <Typography className={classes.date}>{date}</Typography>
        </Card>
    );
}

CommentContent.propTypes = {
    classes: PropTypes.object.isRequired,
    userName: PropTypes.string,
    message: PropTypes.string
};

export default withStyles(styles)(CommentContent);