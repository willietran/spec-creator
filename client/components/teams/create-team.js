import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class CreateTeam extends Component {
  constructor(props) {
    super(props);
  }

  onCreateTeamClick(event) {
    event.preventDefault();

    Meteor.call('teams.insert',
      this.refs.teamName.value, (error, teamId) => {
        browserHistory.push(teamId + "/specs");
      }
    );
  }

  render() {
    return (
      <div>
        <h3>What's the name of your team?</h3>
        <form>
          <label>Team Name</label>
          <input ref="teamName" className="form-control" />
        </form>
        <button
          onClick={this.onCreateTeamClick.bind(this)}
          className="btn btn-primary">
          Next
        </button>
      </div>

    );
  }
}

export default CreateTeam;
