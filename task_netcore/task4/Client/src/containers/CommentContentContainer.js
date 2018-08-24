import React from 'react';
import CommentContent from '../views/CommentContent';

class CommentContentContainer extends React.Component {
    eachComment = i => {
        return (
            <CommentContent
                userName={i.userName}
                message={i.message}
                date={i.date}
                key={i + i.date} />
        );
    };

    render() {
        console.log(this.state);
        return (
            <div>
                {this.props.comments.map(this.eachComment)}
            </div>
        )
    }
}

export default CommentContentContainer;