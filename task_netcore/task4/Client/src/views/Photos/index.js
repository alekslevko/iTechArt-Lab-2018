import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Gallery from 'react-grid-gallery';

const Photos = ({ photos, classes }) => {
  return (
    <div className={classes.galeryContainer}>
      <Gallery
        enableImageSelection={false}
        images={[...photos].map(photo => ({
          src: photo.pictureUrl,
          thumbnail: photo.pictureUrl,
          thumbnailHeight: 180
        }))} />
    </div>
  );
}

Photos.propTypes = {
  classes: PropTypes.object.isRequired,
  photos: PropTypes.array
};

export default withStyles(styles)(Photos);