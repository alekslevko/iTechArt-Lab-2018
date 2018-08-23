import React from 'react';
import Comment from '../views/Comment';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { onCommentChange, clearCommentField } from '../actions'
import { applicationRoutes } from '../Constants';
import axios from 'axios';

class CommentContainer extends React.Component {
    state = {
        comments: [],
        id: this.props.id
    }

    /*componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        axios.get(`http://localhost:50834/comment/getcomments/` + this.state.id)
            .then(response => {
                this.setState({ comments: response.data });
            })
    }

    send = (comment) => {
        axios.post(`http://localhost:50834/comment/addcomment`, comment )
            .then(response => {
                this.props.clearCommentField();
                this.getComments();
            })
    }

    onCommentChange = (event) => {
        let value = event.target.value;
        this.props.onCommentChange(value);
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { isAuth, message } = this.props;
        const comment = {
            message: message,
            movieId: this.state.id
        }

        if (!isAuth) {
            this.props.history.push(applicationRoutes.loginReduxFormRoute);
        }
        else {
            send(comment);
        }        
    }    

    eachComment = i => {
		return (
			<Comment
				userName={i.userName}
                message={i.message}
                onSubmit={this.onSubmit}
                currentUser={currentUser} />
		);
	};  
    
    render() {        
        return (
            <div> 
            {this.state.comments.map(this.eachComment)}
            </div>
        )
    }
}*/

render() {        
    return (
        <Comment />
    )
}
}

/*const mapDispatchToProps = (dispatch) => {
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
}*/

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentContainer));
export default CommentContainer;

