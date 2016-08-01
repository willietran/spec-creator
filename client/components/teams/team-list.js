import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Teams } from '../../../imports/collections/teams';

class TeamList extends Component {
  onTeamRemove(team) {
    Meteor.call('teams.remove', team);
  }

  renderList() {
    return this.props.teams.map(team => {
      const url = team._id + "/templates";

      return (
        <li className="list-group-item" key={team._id}>
          <Link to={url}> Team Name: {team.teamName}</Link>
          <p className="pull-left">Members: {team.members} | </p>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onTeamRemove(team)}>
              Remove
            </button>
          </span>
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('teams');

  return { teams: Teams.find({}).fetch()};
}, TeamList);
