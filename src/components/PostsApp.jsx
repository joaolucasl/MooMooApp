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
    /*  Checking availability of Geolocation features.
    *   If not available, the application will further
    *   render an error message instead of the app content
    */
    var self = this;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (current) {
        // Setting the current location state for further use
        self.setState({
          position: {
            latitude: current.coords.latitude,
            longitude: current.coords.longitude
          }
        });
      });
    } else {
      self.setState({
        position: null
      });
    }
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

    /*  Checking if the position state:
     *  If there's a position defined,
     *  renders the application as normal.
     *  If not, shows error message.
     **/

    return (
      <div className="posts-app">
      <Navbar links={navbarLinks}/>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
});

module.exports = PostsApp;
