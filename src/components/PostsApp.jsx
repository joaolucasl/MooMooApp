var React = require('react');
var PostsList = require('./PostsList.jsx');
var Navbar = require('./Navbar.jsx');

var PostsApp = React.createClass({
  getInitialState: function () {
    //  Setting the initial state of data
    return {
      posts: this.props.posts
    };
  },
  /* `componentWillReceiveProps` will run before
   * the new props are set, and then we set
   * the state according the new props.
   */
  componentWillReceiveProps: function (newProps) {
    this.setState(
      {
        posts: newProps.posts
      }
      );
  },
  render: function () {
    //  TODO Update hardcoded `navbarLinks` functionality
    var navbarLinks = [
      {
        href: 'a',
        title: 'AAA',
        hash: '#a'
      },
      {
        href: 'b',
        title: 'BBB',
        hash: '#b'
      }
    ];

    return (
      <div className="posts-app">
      <Navbar links={navbarLinks}/>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
});

module.exports = PostsApp;
