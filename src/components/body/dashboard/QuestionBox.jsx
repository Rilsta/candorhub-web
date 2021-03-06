import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import React from 'react';

import CommentBox from './CommentBox';
import QuestionList from './QuestionList';


export default React.createClass({

  getInitialState: function() {
    return { commentShow: false };
    return { navArrowChange: false };
  },

  onClick: function() {
    this.setState({ commentShow: !this.state.commentShow });
    this.setState({ navArrowChange: !this.state.navArrowChange });
  },

  render: function() {
    return (
      <div className="dashboard__question-box">
        <h3 className="question" key={this.props.question.id} onClick={ this.onClick }>
          { this.state.navArrowChange ? <NavigationArrowDropUp /> : <NavigationArrowDropDown /> }
          {this.props.question.body}
        </h3>
        <div className="comment-list">
          { this.state.commentShow ? <CommentBox question={this.props.question} /> : null }
        </div>
      </div>
      );
    }
  });
