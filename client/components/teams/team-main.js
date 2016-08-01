import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Teams } from '../../../imports/collections/teams';

import TeamList from './team-list.js';

class TeamMain extends Component {
  render() {
    return (
      <TeamList team={this.props.team}/>
    );
  }
};

export default createContainer((props) => {
  const { teamId } = props.params;
  Meteor.subscribe('teams');

  return { team: Teams.findOne(teamId) };
}, TeamMain);
