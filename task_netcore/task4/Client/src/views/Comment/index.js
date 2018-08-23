import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import SendIcon from '@material-ui/icons/Send';
import { Typography, withStyles, Card, Button, TextField, Avatar } from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const Comment = ({ classes, message, userName, onSubmit, comments }) => {
    return (
        <Card className={classes.commentContainer}>
            <Typography className={classes.title}>
                Tell your opinion about the film
            </Typography>
            <form onSubmit={onSubmit} className={classes.commentForm}>
                <TextField
                    required
                    label="Comment" />
                <Button color='primary' variant='outlined' className={classes.button} type="submit">
                    <SendIcon className={classes.sendIcon} />
                </Button>
            </form>
            <Card>
                <Avatar>
                    <PersonPinIcon />
                </Avatar>
                <Typography className={classes.userName}>{userName}</Typography>
                <Typography className={classes.message}>{message}</Typography>
            </Card>
            {
                !message && <Card className={classes.noComments}>
                    <Typography>
                        There are no comments yet, you can be the first
                    </Typography>
                </Card>
            }
        </Card>
    );
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
    userName: PropTypes.string,
    message: PropTypes.string
};

export default withStyles(styles)(Comment);