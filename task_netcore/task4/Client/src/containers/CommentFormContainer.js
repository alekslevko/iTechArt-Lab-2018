import React from 'react';
import CommentForm from '../views/CommentForm';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { onCommentChange, clearCommentField, loadComments } from '../actions'
import { applicationRoutes, webApiRoutes } from '../Constants';
import axios from 'axios';
import CommentContentContainer from './CommentContentContainer';

class CommentFormContainer extends React.Component {
    state = {
        id: this.props.id
    };

    send = (comment) => {
        axios.post(webApiRoutes.addCommentRoute, comment, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
            .then(response => {
                this.props.clearCommentField();
                this.getComments();
            })
    }

    onCommentChange = (event) => {
        let value = event.target.value;
        this.props.onCommentChange(value);
    };

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        axios.get(webApiRoutes.loadCommentsRoute + this.state.id)
            .then(response => {
                this.props.loadComments(response.data);
            })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { isAuth, message } = this.props;
        const comment = {
            message: message,
            movieid: this.state.id
        }

        if (!isAuth) {
            this.props.history.push(applicationRoutes.loginReduxFormRoute);
        }
        else {
            this.send(comment);
        }
    }

    render() {
        const {message, comments} = this.props;

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
        clearCommentField: bindActionCreators(clearCommentField, dispatch),
        onCommentChange: bindActionCreators(onCommentChange, dispatch),
        loadComments: bindActionCreators(loadComments, dispatch)
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