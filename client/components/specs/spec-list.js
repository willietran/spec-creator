import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// Import collections
import { Specs } from '../../../imports/collections/specs';

class SpecList extends Component {

  renderList() {
    if (this.props) {
      return this.props.specs.map(spec => {
        const { teamId } = this.props.params
        const url = "/" + teamId + "/specs/" + spec._id + "/edit";
        return (
          <li className="list-group-item" key={spec._id}>
            <Link to={url} className="pull-left">Title: {spec.specTitle}</Link>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-success">
            <Link to={"/" + this.props.params.teamId + "/create-spec"}>Create Spec</Link>
        </button>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
};

export default createContainer((props) => {
  Meteor.subscribe('specs');

  const { teamId } = props.params;

  return {
    specs: Specs.find({ team: teamId }).fetch()
  };
}, SpecList);
