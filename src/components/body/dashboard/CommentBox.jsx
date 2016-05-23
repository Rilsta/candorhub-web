import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';
import moment from 'moment';

import QuestionBox from './QuestionBox';

const avatarStyles = {
  marginBottom: 5,
};

const getTimestamp = function(comment) {
  return moment(comment.timestamp).fromNow();
}

const getUsername = function(comment) {
  return comment.username || "Unknown User";
}

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentRender = comments.map(function(comment) {
    return (
      <div className="comments" key={comment.id}>
        <Avatar style={avatarStyles}>U</Avatar>
        <span className="comments__body">
          {comment.body}
        </span>
        <p className="comments__meta">
          <span className="comments__date">{getTimestamp(comment)}</span>
          <span className="comments__user">{getUsername(comment)}</span>
        </p>
      </div>
      );
    });
    return (
      <div className="comments__comment-list">
        {commentRender}
      </div>
    );
  }
});
