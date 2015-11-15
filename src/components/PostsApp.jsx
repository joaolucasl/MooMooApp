var React = require('react');
var ReactDOM = require('react-dom');
var PostsList = require('./PostsList.jsx');

var PostsApp = React.createClass({
  getInitialState:  function(){

    //Setting the initial state of data
    return {
      posts: this.props.posts
    }
  },
  componentWillReceiveProps:  function(newProps){
      this.setState(
      {
        posts:newProps.posts
      }
      );
  },
  render: function () {
    return (
      <div className="posts-app">
      <PostsList posts={this.state.posts} />
      </div>
    );
  }
});

module.exports = PostsApp;
