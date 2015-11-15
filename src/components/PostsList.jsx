var React = require('react');
var ReactDOM = require('react-dom');
var Post = require('./Post.jsx');


/**
 * React Class for the Post listing component.
 * It creates child components
 */
var PostsList = React.createClass({
  render: function(){

    /*
    * Creating an array of Post components holding
    * individual data of each post
    */
    var posts = this.props.posts.map(function(post){
        return (
        <Post key={post.id} uuid={post.uuid} content={post.content} createdAt={post.createdAt} lat={post.latitude} long={post.longitude} />
        )
    });

    // And rendering it
    return (
    <div className="post-list">{posts}</div>
    )
  }
});

module.exports = PostsList;
