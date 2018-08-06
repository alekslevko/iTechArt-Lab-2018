import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ IsAuthorized, ...props }) => {
    return IsAuthorized ? <Route {...props} /> : <Redirect to={props.redirect} />
}

const MapStateToProps = (state) => {
    return {
        IsAuthorized: state.authorizationReducer
    }
};

export default connect(MapStateToProps)(PrivateRoute);