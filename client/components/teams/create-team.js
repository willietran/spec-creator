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
      <div className="signup-container">
        <div className="split-pane-left">
          <h2 className="text-center lead-font top-margin-medium">What's your team name?</h2>
          <div className="signup-input-group">
            <div className="row">
              <div className="col-xs-12">
                <div>
                  <label for="signup-teamname" className="signup-label">Team Name</label>
                  <input
                    id="signup-teamname"
                    className="form-control signup-field"
                    ref="teamName"
                    type="name"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4 text-center">
                <button
                  className="btn btn-primary signup-button"
                  onClick={this.onCreateTeamClick.bind(this)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default CreateTeam;
