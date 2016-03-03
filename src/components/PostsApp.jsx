var React = require('react');
var PostsList = require('./PostsList.jsx');
var Navbar = require('./Navbar.jsx');

var PostsApp = React.createClass({
  /*  WatchID will hold the Geolocation watcher, to keep us updated on
  *   the user's current location.
  */
  watchID: null,
  getInitialState: function () {
    /*  This isn't meant for synchronisation, but for initialisation.
    *   The only purpose we get the `posts` data from the props is
    *   to intialise the application with the data from the backend.
    */
    return {
      posts: this.props.posts,
      position: null
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
  componentWillMount: function () {
    //  TODO - Rewrite Geolocation functions with watcherID
    //if(navigator.geolocation.)
  },
  render: function () {
    //  TODO Update hardcoded `navbarLinks` functionalities
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
          <Navbar links={navbarLinks} position={this.state.position}/>
          <PostsList posts={this.state.posts} />
        </div>
      );
    }
});

module.exports = PostsApp;
