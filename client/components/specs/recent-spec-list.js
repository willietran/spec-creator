import React, { Component } from 'react';
import { Link } from 'react-router';

class RecentSpecList extends Component {
  onSpecRemove(spec) {
    Meteor.call('specs.remove', spec)
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
                <span className="glyphicon glyphicon-trash float-right"></span>
              </button>
            </span>
          </div>
        )
      });
    }
  }

  render() {
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
};

export default RecentSpecList;
