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
      const url = "/" + team._id + "/specs";

      return (
        <li key={team._id}>
          <Link
            className="list-team-name"
            to={url}>{team.teamName}
          </Link>
          <span className="pull-right">
            <button
              className="no-style-button"
              onClick={() => this.onTeamRemove(team)}>
              <span className="
                glyphicon
                glyphicon-trash
                float-right">
              </span>
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
            <Link to="/teams" className="logo">FeaturePad</Link>
          </span>
        </div>
        <div className="teams-header top-margin-large">
          <span>
            <h4 className="team-header">Teams</h4>
            <button
              className="no-style-button">
                <Link className="link" to="/create-team">
                  <span className="
                    glyphicon
                    glyphicon-plus-sign
                    create-team-glyph">
                  </span>
                </Link>
            </button>
          </span>
        </div>

        <ul className="list-style-none">
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
