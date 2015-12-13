var React = require('react');
var Post = require('./Post.jsx');


/**
 * React Class for the Post listing component.
 * It creates child components
 */
var PostsList = React.createClass({
  render: function () {
    /*
    *  Creating an array of `Post` components that hold
    *  individual props of each post
    */
    var propPosts = this.props.posts;
    var posts = propPosts.map(function (post) {
      return (
          <Post key={post.id} id={post.id} uuid={post.uuid} content={post.content} createdAt={post.createdAt} latitude={post.latitude} longitude={post.longitude} />
        );
    });


    // And rendering it
    return (
      <div className="">
        <div className="post-list center-align">{posts}</div>
        <div className="fixed-action-btn">
        <a className="btn-floating btn-large waves-effect waves-light amber">
            <i className="material-icons">add</i>
        </a>
        </div>
      </div>
    );
  }
});

module.exports = PostsList;
