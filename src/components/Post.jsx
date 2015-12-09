var React = require('react');
var ReactDOM = require('react-dom');
var TimeAgo = require('react-timeago');
/**
 * React class for the component of Single post to be used
 * in the listings componnent.
 * This basically renders the data from the properties
 * into a div that will later be styled via CSS
 */
var Post = React.createClass({
  render: function () {

  var numReplies;
  if(this.props.replies){
    word = (this.props.replies > 1)?"replies":"reply"
    numReplies = this.props.replies + word
  }


  return (

<div className="row">
<div className="col s12">
  <div className="card">
    <div className="card-content flow-text left-align row">
        <div id="post-content" className="col s10">
        {this.props.content}
        </div>
        <div id="post-thumbs" className="col s2 center-align">
        <i className="medium material-icons">keyboard_arrow_up</i><br/>
        <i className="medium material-icons">keyboard_arrow_down</i>
        </div>
    </div>
    <div className="card-action left-align">
      <TimeAgo date={this.props.createdAt} className=""/>
      {numReplies}
    </div>
  </div>
</div>
</div>



    )
    }
});

module.exports = Post;
