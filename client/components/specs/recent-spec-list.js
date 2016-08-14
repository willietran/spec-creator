import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class RecentSpecList extends Component {
  onSpecRemove(spec) {
    Meteor.call('specs.remove', spec)
  }

  onNoSpecSubmitClick(event) {
    event.preventDefault;
    const team = this.props.team[0]._id

    Meteor.call('specs.insert',
      team,
      (error, specId) => {
        browserHistory.push("/" + team + "/specs/" + specId + "/edit/")
      }
    )
  }

  renderList() {
    if(this.props) {
      return this.props.userDoc.map(spec => {
        const { team } = spec;
        const url = "/" + team + "/specs/" + spec._id + "/edit";
        return (
          <div className="list-group-item list-item" key={spec._id}>
            <div className="list-content">
              <Link
                to={url}
                className="pull-left spec-list-item"
              >
                <span
                  className="
                    pull-left
                    glyphicon
                    glyphicon-list-alt
                    list-item-glyph">
                </span>
                {spec.specTitle}
              </Link>
            </div>
            <span className="pull-right">
              <button
                className="no-style-button"
                onClick={() => this.onSpecRemove(spec)}>
                <span className="
                  glyphicon
                  glyphicon-trash
                  float-right">
                </span>
              </button>
            </span>
          </div>
        )
      });
    }
  }

  render() {
    if(this.props.userDoc.length === 0) {
      return(
        <div className="list-container no-spec-container">
          <div className="list-header no-spec-header">
            <h3>You have no specs!</h3>
          </div>
          <div>
            <button
              className="btn signup-button"
              onClick={this.onNoSpecSubmitClick.bind(this)}>
              Create New Spec
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="list-container">
          <div className="list-header">
            <h2 className="lead-font">Your Specs</h2>
          </div>
          <div>
            <div className="top-margin-small list-items list-group">
              {this.renderList()}
            </div>
          </div>
        </div>
      );
    }
  }
};

export default RecentSpecList;
