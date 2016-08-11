import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Teams } from '../../../imports/collections/teams';

class TeamList extends Component {
  onTeamRemove(team) {
    Meteor.call('teams.remove', team);
  }

  renderList() {
    console.log(this.props.teams);
    return this.props.teams.map(team => {
      const url = team._id + "/specs";

      return (
        <li key={team._id}>
          <Link to={url}>{team.teamName}</Link>
          <span className="pull-right">
            <button
              className="no-style-button"
              onClick={() => this.onTeamRemove(team)}>
              <span className="glyphicon glyphicon-trash float-right"></span>
            </button>
          </span>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="sidebar-top">
          <span>
            <a href="#" className="lead-font">FeaturePad</a>
          </span>
          <button
            className="btn create-team-button float-right">
              <Link className="link" to="/create-team">Create</Link>
          </button>
        </div>
        <h5 className="top-margin-large">Teams</h5>
        <ul className="list-style-none ">
          {this.renderList()}
        </ul>
      </div>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('teams');

  return { teams: Teams.find({}).fetch()};
}, TeamList);
