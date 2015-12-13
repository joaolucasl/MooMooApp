var React = require('react');
var TimeAgo = require('react-timeago');
/**
 * React class for the component of Single post to be used
 * in the listings componnent.
 * This basically renders the data from the properties
 * into a div that will later be styled via CSS
 */
var Post = React.createClass({
  // Declaring expected properties for validation
  propTypes: {
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isRequired,
    uuid: React.PropTypes.string.isRequired,
    createdAt: React.PropTypes.string.isRequired,
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    replies: React.PropTypes.array
  },
  render: function () {
    var numReplies,
      word;

    // Preparing the UI string according to the number of replies
    if (this.props.replies) {
      word = (this.props.replies !== 1) ? 'replies' : 'reply';
      numReplies = this.props.replies + word;
    }

    // Returning the element to the DOM
    return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content flow-text left-align row">
              <div id="post-content" className="col s9 m10">
                {this.props.content}
              </div>
              <div id="post-thumbs" className="col s3 m2 center-align valign-wrapper">
                <i className="small material-icons">keyboard_arrow_up</i>
                <br/>
                <i className="small material-icons">keyboard_arrow_down</i>
              </div>
          </div>
          <div className="card-action left-align">
            <TimeAgo date={this.props.createdAt} className=""/>
            {numReplies}
          </div>
        </div>
      </div>
    </div>
      );
  }
});

module.exports = Post;
