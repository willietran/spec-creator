import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

//Components
import EditSpec from './edit-spec';
import SpecShare from '../share/spec-share';
import CreateSpecTitle from './create-spec-title';

//Collections
import { Specs } from '../../../imports/collections/specs';
import { Templates } from '../../../imports/collections/templates';
import { Teams } from '../../../imports/collections/teams';


class SpecMain extends Component {
  render() {
    if (!this.props.spec || !this.props.template || !this.props.team) {
      return (
        <div>Loading...</div>
      );
    }

    return(
      <div>
        <CreateSpecTitle
          spec={this.props.spec}
        />
        <EditSpec
          spec={this.props.spec}
          template={this.props.template}
        />
        <SpecShare
          spec={this.props.spec}
          team={this.props.team}
        />
      </div>
    )
  }
}

export default createContainer((props) => {
  const { specId } = props.params;
  const { teamId } = props.params;

  Meteor.subscribe('specs');
  Meteor.subscribe('templates');
  Meteor.subscribe('teams');
  Meteor.subscribe('teamMembers');

  return {
    spec: Specs.findOne(specId),
    template: Templates.findOne({ _id: 'dpGaZWcWLx3PqGgjH' }),
    team: Teams.findOne({ _id: teamId })
  }
}, SpecMain);
