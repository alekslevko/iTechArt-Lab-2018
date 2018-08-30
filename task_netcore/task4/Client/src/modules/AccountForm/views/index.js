import React from 'react';
import { Paper, TextField, Button, FormControl, FormHelperText, withStyles } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './styles';
import { applicationRoutes } from '../../../Constants';

const renderField = ({ input, label, type, meta: { touched, error }, margin }) => (
	<div>
		<FormControl>
			<div>
				<TextField label={label} type={type} error={error && touched} margin={margin} {...input} />
				<div>
					{touched &&
						(error && <FormHelperText>{error}</FormHelperText>)}
				</div>
			</div>
		</FormControl>
	</div>
);

let AccountForm = ({ handleSubmit, classes, currentPath, errorMessage, haveAccountErrors }) => {
	return (
		<div>
			<Paper className={classes.paperContainer} >
				<form onSubmit={handleSubmit} className={classes.formContainer} >
					<div className={classes.fieldContainer}>
						<Field name="userName" component={renderField} label="Name" type="text" margin="normal" />
						<Field name="password" component={renderField} label="Password" type="password" margin="normal" />
					</div>
					<Button type="submit" variant="outlined">
						{currentPath === applicationRoutes.registerFormRoute && 'Register'}
						{currentPath === applicationRoutes.loginFormRoute && 'Login'}
					</Button>
				</form>
			</Paper>
			{
				haveAccountErrors && <Paper className={classes.errorMessage}>
					{errorMessage}
				</Paper>
			}
		</div>
	);
}

AccountForm.propTypes = {
	currentPath: PropTypes.string,
	handleSubmit: PropTypes.func,
	classes: PropTypes.object.isRequired
};

AccountForm = reduxForm({
	form: 'register'
})(AccountForm);

export default withStyles(styles)(AccountForm);