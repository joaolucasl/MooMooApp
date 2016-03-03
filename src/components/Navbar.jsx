var React = require('react');

/**
 * React class for the Left Sidebar
 * This will hold the notification area
 * and internal function links
 */
var Navbar = React.createClass({
  propTypes: {
    links: React.PropTypes.array.isRequired,
    position: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
    links: null,
    position: null
    }
  },
  componentWillMount: function () {
    console.log(this.props.position);
    this.setState({
      position: this.props.position,
      links:  this.props.links
    });
  },
  render: function () {
    var links = this.state.links;
    console.log("Component rendering");
    //  Building the list of links
    var menuLinks = links.map(function (current) {
      //  TODO Update `li` items to proper object design
      return (
      <li key={current.hash}><a href={current.href}>{current.title}</a></li>
      );
    });

    // Checking for the existence of the position object and its values
    if (this.state.position) {
      //  Building the img src string
      var imgSrc = 'http://maps.googleapis.com/maps/api/staticmap?center=' + this.state.position.latitude + ',' + this.state.position.longitude + '&zoom=13&scale=false&size=300x200&maptype=hybrid&format=png&visual_refresh=true'
      //  Appending a Map image as placeholder for future position map component
      console.log(imgSrc);
      menuLinks.push(
        <li key="map-li">
          <img className="responsive-img" src={imgSrc} />
        </li>
      );
    }
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
