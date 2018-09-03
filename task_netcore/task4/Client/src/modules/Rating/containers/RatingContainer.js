import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from '../views';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {clearErrorMessage, getAverageRating, sendRating, getUserRating } from '../actions';
import { applicationRoutes } from '../../../Constants';

class RatingContainer extends React.Component {
    state = {
        id: this.props.match.params.id
    };

    componentDidMount() {
        getAverageRating(this.props.dispatch, this.state.id);
        if (this.props.isAuth) {
            getUserRating(this.props.dispatch, this.state.id);
        }
        this.props.clearErrorMessage();
    }

    onRatingChange = (newRating) => {
        if (!this.props.isAuth) {
            this.props.history.push(applicationRoutes.loginFormRoute);

            return;
        }

        const rating = {
            movieId: this.state.id,
            value: newRating
        }

        sendRating(this.props.dispatch, rating, this.state.id)
    }

    render() {
        const { value, alreadyRated } = this.props.rating;
        const { averageRating, isLoading } = this.props;
        const { haveRatingErrors, errorMessage } = this.props;

        return (
            <Rating
                haveRatingErrors={haveRatingErrors}
                errorMessage={errorMessage}
                onRatingChange={this.onRatingChange}
                value={value}
                isLoading={isLoading}
                alreadyRated={alreadyRated}
                averageRating={averageRating} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrorMessage: bindActionCreators(clearErrorMessage, dispatch),
        dispatch
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.isAuth,
        ...state.userRating,
        ...state.averageRating,
        ...state.sendRating
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RatingContainer));