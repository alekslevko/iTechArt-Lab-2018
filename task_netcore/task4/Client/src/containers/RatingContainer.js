import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from '../views/Rating';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showErrorMessage, clearErrorMessage } from '../actions';
import { applicationRoutes } from '../Constants';
import axios from 'axios';

class RatingContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: {
                alreadyRated: false
            },
            averageRating: 0,
            id: this.props.match.params.id
        };
    }

    componentDidMount() {
        this.getAverageRating();
        if (this.props.isAuth) {
            this.getUserRating();
        }
        this.props.clearErrorMessage();
    }

    getUserRating = () => {
        axios.get(`http://localhost:49448/rating/getuserrating/` + this.state.id, {
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
        axios.get(`http://localhost:49448/rating/getaveragerating/` + this.state.id)
            .then(response => {
                this.setState({ averageRating: response.data });
                if (this.props.isAuth) {
                    this.getUserRating();
                }
            })
    }

    onFail = (errors) => {
        let value;

        if (errors.response !== undefined) {
            value = errors.response.data;
        } else {
            value = "Server is not responding "
        }

        this.props.showErrorMessage(value);
    }

    onRatingChange = (newRating) => {
        if (!this.props.isAuth) {
            this.props.history.push(applicationRoutes.loginReduxFormRoute);

            return;
        }

        const sendRating = {
            movieId: this.state.id,
            value: newRating
        }

        axios.post(`http://localhost:49448/rating/addrating`, sendRating, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
            .then(response => {
                this.getAverageRating();
                this.getUserRating();
            })
            .catch(errors => {
                this.onFail(errors);
            });

    }


    render() {
        const { value, alreadyRated } = this.state.rating;
        const { averageRating } = this.state;
        const { haveErrors, errorMessage } = this.props;
        console.log(this.state);
        return (
            <Rating
                haveErrors={haveErrors}
                errorMessage={errorMessage}
                onRatingChange={this.onRatingChange}
                value={value}
                alreadyRated={alreadyRated}
                averageRating={averageRating} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showErrorMessage: bindActionCreators(showErrorMessage, dispatch),
        clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.isAuth,
        ...state.errorsRating
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RatingContainer));