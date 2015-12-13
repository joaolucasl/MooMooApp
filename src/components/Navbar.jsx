var React = require('react');

/**
 * React class for the Left Sidebar
 * This will hold the notification area
 * and internal function links
 */
var LeftNavbar = React.createClass({
  propTypes: {
    links: React.PropTypes.array.isRequired
  },
  render: function () {
    var links = this.props.links;
    //  Building the list of links
    var menuLinks = links.map(function (current) {
      //  TODO Update `li` items to proper object design
      return (
      <li key={current.hash}><a href={current.href}>{current.title}</a></li>
      );
    });

    //  Creating the Sibebar DOM Object from the list of links
    return (
      <nav className="amber">
      <ul id="slide-out" className="side-nav">
        {menuLinks}
        </ul>
        <a href="#a" data-activates="slide-out" className="button-collapse show-on-large"><i className="mdi-navigation-menu" /></a>
      </nav>
    );
  }
});

module.exports = LeftNavbar;
