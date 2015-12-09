var React = require('react');
var ReactDOM = require('react-dom');
var TimeAgo = require('react-timeago');
/**
 * React class for the Left Sidebar
 * This will hold the notification area
 */
var LeftNavbar = React.createClass({
  render: function () {


    var menuLinks = this.props.links.map(function(current){
        return (
        <li><a href="{current.href}">{current.title}</a></li>
        )
    });

    return(
      <nav className="amber">
        <ul id="slide-out" className="side-nav">
        {menuLinks}
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="mdi-navigation-menu" /></a>
      </nav>
    )
  }
});

module.exports = LeftNavbar;
