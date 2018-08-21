import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import styles from './styles';

const Photos = ({ photos, classes }) => {
    return (
        <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {photos.map(tile => (
          <GridListTile key={tile.pi}>
            <img src={tile.pictureUrl} alt='Movie' />   
          </GridListTile>
        ))}
      </GridList>
    </div>
    );
}

Photos.propTypes = {
    classes: PropTypes.object.isRequired,
    photos: PropTypes.object.isRequired
};

export default withStyles(styles)(Photos);