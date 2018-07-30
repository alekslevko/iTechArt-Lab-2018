import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

const About = ({classes}) => {
    return (<Typography variant="display1" className= {classes.about}>
        iTechArt Group – это команда Remarkable People, профессионалов в
        сфере разработки, тестирования, сервисной поддержки программных продуктов,
        модернизации и интеграции бизнес-приложений. 
        Мы страстно любим дело, которым занимаемся, и
        стремимся к совершенству в решении любых задач.
    </Typography>);
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);