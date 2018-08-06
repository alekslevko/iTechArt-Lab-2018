import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import styles from './styles';
import { Link } from 'react-router-dom';
import { applicationRoutes } from '../../Constants';

const Menu = ({ value, showMenu, handleChange, classes }) => {
  return (
  <div className={classes.root}>
    {showMenu && <AppBar position="static">
      <Tabs 
        value={value}
        onChange = {handleChange} >
        <Tab label='О нас' component={Link} to={applicationRoutes.aboutRoute} />
        <Tab label='Счетчики' component={Link} to={applicationRoutes.countersRoute} />
        <Tab label='Войти' component={Link} to={applicationRoutes.loginRoute} />
        <Tab label='Войти c Redux' component={Link} to={applicationRoutes.loginReduxRoute} />
        <Tab label='Войти c Redux-form' component={Link} to={applicationRoutes.loginReduxFormRoute} />
      </Tabs>
    </AppBar>
    }
  </div>);
    
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func
};

export default withStyles(styles)(Menu);