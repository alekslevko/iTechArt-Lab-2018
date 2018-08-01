import React from 'react';
import PropTypes from 'prop-types';
import { Paper, withStyles, TextField, Button, FormControl, FormHelperText } from '@material-ui/core';
import styles from './styles'

const Login = ({ classes, mail, password, mailValid, passwordValid, onMailChange, onPasswordChange, handleSubmit }) => {

    return (
        <div>
            <Paper >
                <form onSubmit={handleSubmit} className={classes.container}>
                    <div>
                        <FormControl>
                            <TextField
                                id="mail"
                                error={!mailValid}
                                label="Почта"
                                className={classes.textField}
                                value={mail}
                                onChange={onMailChange}
                                margin="normal" />
                            <FormHelperText id='mail-error'></FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <TextField
                                id="password-input"
                                error={!passwordValid}
                                label="Пароль"
                                className={classes.textField}
                                onChange={onPasswordChange}
                                type="password"
                                value={password}
                                autoComplete="current-password"
                                margin="normal" />
                            <FormHelperText id='password-error'></FormHelperText>
                        </FormControl>
                    </div>
                    <Button type="submit" variant="outlined" className={classes.button}>
                        Войти
                    </Button>
                </form>
            </Paper>
            <Paper>
                <p>{mail}</p>
                <p>{password}</p>
            </Paper>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    mail: PropTypes.string,
    password: PropTypes.string,
    mailValid: PropTypes.bool,
    passwordValid: PropTypes.bool,
    onInputChange: PropTypes.func,
    onPasswordChange: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default withStyles(styles)(Login);