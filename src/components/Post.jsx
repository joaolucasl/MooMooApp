var React = require('react');
var ReactDOM = require('react-dom');

/**
 * React class for the component of Single post to be used
 * in the listings componnent.
 * This basically renders the data from the properties
 * into a div that will later be styled via CSS
 */
var Post = React.createClass({
  render: function () {
    return (

    <div>
      <p>{this.props.content}</p>
      <span><i>{this.props.createdAt}</i></span>

    </div>

    )
    }
});

module.exports = Post;
