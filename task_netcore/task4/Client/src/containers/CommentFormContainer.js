import React from 'react';
import CommentForm from '../views/CommentForm';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { onCommentChange, clearCommentField } from '../actions'
import { applicationRoutes } from '../Constants';
import axios from 'axios';
import CommentContentContainer from './CommentContentContainer';

class CommentFormContainer extends React.Component {
    state = {
        comments: [],
        id: this.props.id
    }
    send = (comment) => {
        axios.post(`http://localhost:50834/comment/addcomment`, comment, {
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
        axios.get(`http://localhost:50834/comment/getcomments/` + this.state.id)
            .then(response => {
                this.setState({ comments: response.data });
            })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { isAuth, message } = this.props;
        const comment = {
            message: message,
            movieid: this.props.id
        }

        if (!isAuth) {
            this.props.history.push(applicationRoutes.loginReduxFormRoute);
        }
        else {
            this.send(comment);
        }
    }

    render() {
        return (
            <div>
                <CommentForm
                    onSubmit={this.onSubmit}
                    onCommentChange={this.onCommentChange}
                    message={this.props.message} />
                <CommentContentContainer
                     comments={this.state.comments} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        clearCommentField: bindActionCreators(clearCommentField, dispatch),
        onCommentChange: bindActionCreators(onCommentChange, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        ...state.isAuth,
        ...state.comment
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer));