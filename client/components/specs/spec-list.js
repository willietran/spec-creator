import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// Import collections
import { Specs } from '../../../imports/collections/specs';

class SpecList extends Component {
  onSpecRemove(spec) {
    Meteor.call('specs.remove', spec)
  }

  onSubmitClick(event) {
    event.preventDefault;
    const { team } = this.props.specs[0];


    Meteor.call('specs.insert',
      team,
      (error, specId) => {
        browserHistory.push("/" + team + "/specs/" + specId + "/edit/")
      }
    )
  }


  renderList() {
    if (this.props) {
      return this.props.specs.map(spec => {
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
        );
      });
    }
  }

  render() {
    console.log(this.props);
    if(this.props.specs.length === 0) {
      return(
        <div>
          <h3>You have no specs! Create one!</h3>
          <button
            className="btn btn-success"
            onClick={this.onSubmitClick.bind(this)}>
            Create New Spec
          </button>
        </div>
      );
    } else {
      return (
        <div className="list-container">
          <div className="list-header">
            <div>
              <h2 className="lead-font">Team Specs</h2>
            </div>
            <div>
              <button
                className="btn create-spec-button pull-right"
                onClick={this.onSubmitClick.bind(this)}>
                Create
              </button>
            </div>
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

export default SpecList;
