var React = require('react');

/**
 * React class for the Left Sidebar
 * This will hold the notification area
 * and internal function links
 */
var Navbar = React.createClass({
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
    //  Appending a Map image as placeholder for future position map component
    menuLinks.push(
      <li key="map-li">
        <img className="responsive-img" src="http://maps.googleapis.com/maps/api/staticmap?center=-23.289,-47.68&zoom=13&scale=false&size=300x200&maptype=hybrid&format=png&visual_refresh=true" alt="Google Map of -23.289,-47.68"/>
      </li>
    );

    //  Creating the Sibebar DOM Object from the list of links
    return (
      <nav className="amber">
      <div className="container">
      <ul id="slide-out" className="side-nav">
        {menuLinks}
        </ul>
        <a href="#a" data-activates="slide-out" className="button-collapse show-on-large"><i className="mdi-navigation-menu" /></a>
      </div>
      </nav>
    );
  }
});

module.exports = Navbar;
