import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import SendIcon from '@material-ui/icons/Send';
import { Typography, withStyles, Card, Button, TextField } from '@material-ui/core';

const CommentForm = ({ classes, message, onSubmit, onCommentChange  }) => {
    return (
        <Card className={classes.commentFormContainer}>
            <Typography className={classes.title}>
                Tell your opinion about the film
            </Typography>
            <form onSubmit={onSubmit} className={classes.commentForm}>
                <TextField
                    onChange={onCommentChange}
                    value={message}
                    required
                    id='comment'
                    label='Comment' />
                <Button color='primary' variant='outlined' className={classes.button} type="submit">
                    <SendIcon className={classes.sendIcon} />
                </Button>
            </form>
        </Card>
    );
}

CommentForm.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string,
    onSubmit: PropTypes.func,
    onCommentChange: PropTypes.func
};

export default withStyles(styles)(CommentForm);