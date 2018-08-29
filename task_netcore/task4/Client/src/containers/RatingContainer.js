import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from '../views/Rating';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showErrorMessage, clearErrorMessage, loadAverageRating, loadUserRating } from '../actions';
import { applicationRoutes, webApiRoutes } from '../Constants';
import axios from 'axios';

class RatingContainer extends React.Component {
    state = {
        id: this.props.match.params.id
    };

    componentDidMount() {
        this.getAverageRating();
        if (this.props.isAuth) {
            this.getUserRating();
        }
        this.props.clearErrorMessage();
    }

    getUserRating = () => {
        axios.get(webApiRoutes.loadUserRatingRoute + this.state.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
            .then(response => {
                this.props.loadUserRating(response.data);
            })
    }

    getAverageRating = () => {
        axios.get(webApiRoutes.loadAverageRatingRoute + this.state.id)
            .then(response => {
                this.props.loadAverageRating(response.data);
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

        axios.post(webApiRoutes.addRatingRoute, sendRating, {
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
        const { value, alreadyRated } = this.props.rating;
        const { averageRating } = this.props;
        const { haveRatingErrors, errorMessage } = this.props;

        return (
            <Rating
                haveRatingErrors={haveRatingErrors}
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
        clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch),
        loadUserRating: bindActionCreators(loadUserRating, dispatch),
        loadAverageRating: bindActionCreators(loadAverageRating, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.isAuth,
        ...state.errorsRating,
        ...state.userRating,
        ...state.averageRating
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RatingContainer));