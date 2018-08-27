import React from 'react';
import Photos from '../views/Photos';

class PhotoContainer extends React.Component {
    render() {
        const { photos } = this.props;

        return (            
          <Photos
          photos={photos} />            
        );
    }
}

export default PhotoContainer;