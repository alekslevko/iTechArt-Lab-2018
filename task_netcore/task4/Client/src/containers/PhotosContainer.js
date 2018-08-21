import React from 'react';
import axios from 'axios'
import Photos from '../views/Photos';

class PhotoContainer extends React.Component {
    state = {
        photos: [],
        id: this.props.id
    }   

    componentDidMount() {
        axios.get(`http://localhost:50834/photo/getphotos/` + this.state.id)
            .then(response => {
                this.setState({ photos: response.data });
            })
    }

    render() {
        return (
            <Photos
                photos={this.state.photos} />            
        );
    }
}

export default PhotoContainer;