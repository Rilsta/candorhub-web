import React from 'react';
import CommentBox from './CommentBox';
import QuestionBox from './QuestionBox';

export default React.createClass({

  render: function() {
    let questions = this.props.imageForCritique.questions;
    var questionRender = questions.map(function(question) {
      return (
        <div key={question.id}>
          <QuestionBox question={question} />
        </div>
      );
    });
    return (
      <div>
        <h2 className="header">Critique</h2>
        {questionRender}
      </div>
    );
  }
});
