import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from '../views/Rating';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { isAuth } from '../actions';
import { applicationRoutes } from '../Constants';
import axios from 'axios';

class RatingContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: {},
            averageRating: 0,
            id: this.props.id,
            isAuth: this.props.id
        };
    }

    componentDidMount() {
        this.getAverageRating();
        if(this.props.isAuth){
            this.getUserRating();
        }
    }

    getUserRating = () => {
        axios.get(`http://localhost:50834/rating/getuserrating/` + this.props.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState({ rating: response.data });
            })
    }

    getAverageRating = () => {
        axios.get(`http://localhost:50834/rating/getaveragerating/` + this.props.id)
            .then(response => {
                this.setState({ averageRating: response.data });
                if(this.props.isAuth){
                    this.getUserRating();
                }
            })
    }

ableToRate = () => {
    if (this.state.rating.alreadyRated) {
        return false;
    }

    return true;
}

onRatingChange = (newRating) => {
    if (!this.props.isAuth) {
        this.props.history.push(applicationRoutes.loginReduxFormRoute);

        return;
    }

    const sendRating = {
        movieId: this.props.id,
        value: newRating
    }

    axios.post(`http://localhost:50834/rating/addrating`, sendRating, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
        .then(response => {
            this.getAverageRating();
            this.getUserRating();
        })

}


render() {
    console.log(this.state);
    console.log(this.props);
    console.log(this.ableToRate());
    const { value, alreadyRated} = this.state.rating;
    const { averageRating } =  this.state;
    const ableToRate = this.ableToRate
    return (
        <Rating
            ableToRate={ableToRate}
            onRatingChange={this.onRatingChange}
            value={value}
            alreadyRated={alreadyRated}
            averageRating={averageRating} />
    );
}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const mapStateToProps = (state) => {
    return {
        ...state.isAuth
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RatingContainer));