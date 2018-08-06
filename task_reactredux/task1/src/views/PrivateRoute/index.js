import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({IsAutorized, ...props}) => {
    return IsAutorized ? <Route {...props} /> : <Redirect to={props.redirect} />
}

const MapStateToProps = (state) => {
    return {
        IsAutorized: state.authorizationReducer.IsAutorized
    }
};

export default connect(MapStateToProps)(PrivateRoute);