import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Teams } from '../../../imports/collections/teams';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

//Components
import TeamList from './team-list.js';
import Header from '../header';
import SideBarMain from '../sidebar/sidebar-main';

class TeamMain extends Component {
  render() {
    if (!this.props.currentUser) {
      return (
        <div className="text-center">
          <h3>You Might Not Be Signed In...</h3>
          <Link to="/login">Sign in here</Link>
        </div>
      );
    }

    return (
      <div>
        <SideBarMain currentUser={this.props.currentUser} team={this.props.team}/>
      </div>
    );
  }
};

export default createContainer((props) => {
  const { teamId } = props.params;
  Meteor.subscribe('teams');

  return {
    team: Teams.findOne(teamId),
    currentUser: Meteor.user()
  };
}, TeamMain);
