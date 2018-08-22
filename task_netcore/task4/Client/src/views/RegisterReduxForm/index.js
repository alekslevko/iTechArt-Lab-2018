import React from 'react';
import { Paper, TextField, Button, FormControl, FormHelperText, withStyles } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './styles';
import { applicationRoutes } from '../../Constants';

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

let RegisterReduxForm = ({ handleSubmit, classes, currentPath, errorMessage, haveErrors }) => {
	return (
		<div>
			<Paper className={classes.paperContainer} >
				<form onSubmit={handleSubmit} className={classes.formContainer} >
					<div className={classes.fieldContainer}>
						<Field name="userName" component={renderField} label="Name" type="text" margin="normal" />
						<Field name="password" component={renderField} label="Password" type="password" margin="normal" />
					</div>
					<Button type="submit" variant="outlined">
						{currentPath === applicationRoutes.registerReduxFormRoute && 'Register'}
						{currentPath === applicationRoutes.loginReduxFormRoute && 'Login'}
					</Button>
				</form>
			</Paper>
			{
				haveErrors && <Paper className={classes.errorMessage}>
					{errorMessage}
				</Paper>
			}
		</div>
	);
}

RegisterReduxForm.propTypes = {
	currentPath: PropTypes.string,
	handleSubmit: PropTypes.func,
	classes: PropTypes.object.isRequired
};

RegisterReduxForm = reduxForm({
	form: 'register'
})(RegisterReduxForm);

export default withStyles(styles)(RegisterReduxForm);