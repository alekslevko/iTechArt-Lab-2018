import React from 'react';
import CommentContent from '../views/CommentContent';

class CommentContentContainer extends React.Component {
    initCommentComponent = i => {
        return (
            <CommentContent
                userName={i.userName}
                message={i.message}
                date={i.date}
                key={i + i.date} />
        );
    };

    render() {
        return (
            <div>
                {this.props.comments.map(this.initCommentComponent)}
            </div>
        )
    }
}

export default CommentContentContainer;