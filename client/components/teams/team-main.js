import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Teams } from '../../../imports/collections/teams';
import { Specs } from '../../../imports/collections/specs';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

//Components
import SideBarMain from '../sidebar/sidebar-main';
import RecentSpecList from '../specs/recent-spec-list';

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
        <SideBarMain
          currentUser={this.props.currentUser}
          team={this.props.team}
        />
        <RecentSpecList
          userDoc={this.props.userDoc}
          params={this.props.params}
          team={this.props.team}
        />
      </div>
    );
  }
};

export default createContainer((props) => {
  Meteor.subscribe('teams');
  Meteor.subscribe('userDocs');

  return {
    team: Teams.find({}).fetch(),
    currentUser: Meteor.user(),
    userDoc: Specs.find({}).fetch()
  };
}, TeamMain);
