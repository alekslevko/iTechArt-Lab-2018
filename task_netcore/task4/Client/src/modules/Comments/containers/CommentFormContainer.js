import React from 'react';
import CommentForm from '../views/CommentForm';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { onCommentChange, loadComments, sendComment } from '../actions';
import { applicationRoutes, domainName } from '../../../Constants';
import CommentContentContainer from '../../Comments/containers/CommentContentContainer';

const signalR = require('@aspnet/signalr');
const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(domainName + '/comment')
    .build();

class CommentFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id
        };

        hubConnection.start().catch(error => {
            console.log(error);
        });
    }

    onCommentChange = (event) => {
        this.props.onCommentChange(event.target.value);
    };

    componentDidMount() {
        const id = this.state.id;

        loadComments(this.props.dispatch, id);

        hubConnection.on('GetComments', comments => {
            if (comments[0].movieId === id) {
                loadComments(this.props.dispatch, id);
            }
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const id = this.state.id;
        const { isAuth, message } = this.props;
        const comment = {
            message: message,
            movieid: id
        }

        if (!isAuth) {
            this.props.history.push(applicationRoutes.loginFormRoute);
        }
        else {
            sendComment(this.props.dispatch, comment, id);
        }
    }

    render() {
        const { message, comments } = this.props;

        return (
            <div>
                <CommentForm
                    onSubmit={this.onSubmit}
                    onCommentChange={this.onCommentChange}
                    message={message} />
                <CommentContentContainer
                    comments={comments} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCommentChange: bindActionCreators(onCommentChange, dispatch),
        dispatch
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.isAuth,
        ...state.commentForm,
        ...state.comments
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer));