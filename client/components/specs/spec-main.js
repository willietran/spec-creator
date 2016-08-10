import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

//Components
import EditSpec from './edit-spec';
import CreateSpecTitle from './create-spec-title';
import SpecHeader from './spec-header';

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

  //TODO:
    //Create SpecHeader
    //Design EditSpec

    return(
      <div>
        <SpecHeader />
        <div className="container">
          <CreateSpecTitle
            spec={this.props.spec}
            currentUser={this.props.currentUser}
          />
          <EditSpec
            spec={this.props.spec}
            template={this.props.template}
          />
        </div>
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
    team: Teams.findOne({ _id: teamId }),
    currentUser: Meteor.user()
  }
}, SpecMain);
