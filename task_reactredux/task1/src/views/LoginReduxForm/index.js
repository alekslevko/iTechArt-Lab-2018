import React from 'react';
import { Paper, TextField, Button, FormControl, FormHelperText } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

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

let LoginReduxForm = ({ onSubmit, mail, password }) => {
	return (
		<div>
			<Paper>
				<form onSubmit={onSubmit} >
					<Field name="mail" component={renderField} label="Почта" type="text" margin="normal"  />
					<Field name="password" component={renderField} label="Пароль" type="password" margin="normal" />
					<Button type="submit" variant="outlined">
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

LoginReduxForm.propTypes = {
    mail: PropTypes.string,
    password: PropTypes.string,
    handleSubmit: PropTypes.func
};

LoginReduxForm = reduxForm({
	form: 'login'
})(LoginReduxForm);

export default (LoginReduxForm);