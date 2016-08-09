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
    const { teamId } = this.props.params;
    console.log("Create Spec Pressed: " + teamId)

    Meteor.call('specs.insert',
      teamId,
      (error, specId) => {
        browserHistory.push("/" + teamId + "/specs/" + specId + "/edit/")
        console.log("SpecId: " + specId)
      }
    )
  }


  renderList() {
    if (this.props) {
      return this.props.specs.map(spec => {
        const { teamId } = this.props.params
        const url = "/" + teamId + "/specs/" + spec._id + "/edit";
        return (
          <li className="list-group-item" key={spec._id}>
            <Link to={url} className="pull-left">Title: {spec.specTitle}</Link>
            <span className="pull-right">
              <button
                className="btn btn-danger"
                onClick={() => this.onSpecRemove(spec)}>
                Delete Spec
              </button>
            </span>
          </li>
        );
      });
    }
  }

  render() {
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
        <div>
          <button
            className="btn btn-success"
            onClick={this.onSubmitClick.bind(this)}>
            Create New Spec
          </button>
          <ul>
            {this.renderList()}
          </ul>
        </div>
      );
    }
  }
};

export default createContainer((props) => {
  Meteor.subscribe('specs');

  const { teamId } = props.params;

  return {
    specs: Specs.find({ team: teamId }).fetch()
  };
}, SpecList);
