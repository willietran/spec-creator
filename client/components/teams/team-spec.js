import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

//Components
import SideBarMain from '../sidebar/sidebar-main';
import SpecList from '../specs/spec-list';

//Collections
import { Teams } from '../../../imports/collections/teams';
import { Specs } from '../../../imports/collections/specs';

class TeamSpec extends Component {
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
        <SideBarMain currentUser={this.props.currentUser} team={this.props.team} />
        <SpecList specs={this.props.specs} params={this.props.params} />
      </div>
    );
  }
};

export default createContainer((props) => {
  Meteor.subscribe('specs');
  Meteor.subscribe('teams');

  const { teamId } = props.params;

  return {
    team: Teams.find({}).fetch(),
    currentUser: Meteor.user(),
    specs: Specs.find({ team: teamId }).fetch()
  };
}, TeamSpec);
