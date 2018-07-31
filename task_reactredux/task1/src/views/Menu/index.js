import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import styles from './styles';
import { Link } from 'react-router-dom';

const Menu = ({ value, showMenu, handleChange, classes }) => {
  return (
  <div className={classes.root}>
    {showMenu && <AppBar position="static">
      <Tabs 
        value={value}
        onChange = {handleChange}
      >
        <Tab label='О нас'  component={Link} to={'/iTechArt-Lab-2018/about'} />
        <Tab label='Счетчики'  component={Link} to={'/iTechArt-Lab-2018/counters'} />        
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