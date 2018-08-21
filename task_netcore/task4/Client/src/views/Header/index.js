import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Link } from 'react-router-dom';
import { applicationRoutes } from '../../Constants';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const Header = ({ anchorEl, classes, open, handleMenu, handleClose, path, isAuth, logOut, userName }) => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.headerContainer}>
        <Typography variant="title" color="inherit">
          {
            path !== applicationRoutes.moviesRoute &&
            <Link to={applicationRoutes.moviesRoute} className={classes.toMovieLink}>To Movies</Link>
          }
        </Typography>
        <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">          
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}>
            {
              !isAuth && <div>
                <MenuItem onClick={handleClose}>
                  <Link to={applicationRoutes.registerReduxFormRoute} className={classes.loginItems}>
                  <Typography>Register</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={applicationRoutes.loginReduxFormRoute} className={classes.loginItems}>
                  <Typography>Login</Typography>
                  </Link>
                </MenuItem>
              </div>
            }
            {
              isAuth && <div>
                <MenuItem onClick={handleClose}>
                <Typography>Hello: {userName}</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography onClick={logOut}>Log out</Typography>
                </MenuItem>
              </div>
            }
          </Menu>
        </div>
      </Toolbar>
    </AppBar>);
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMenu: PropTypes.func,
  handleClose: PropTypes.func,
  logOut: PropTypes.func,
  open: PropTypes.bool,
  path: PropTypes.string,
  isAuth: PropTypes.string,
  userName: PropTypes.string
};

export default withStyles(styles)(Header);