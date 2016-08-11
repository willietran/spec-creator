import React, { Component } from 'react';

//Components
import TeamList from '../teams/team-list';
import Header from '../header';

class SideBarMain extends Component {
  render() {
    return (
      <div id="sidebar-container">
        <div id="sidebar">
          <TeamList team={this.props.team} />
          <Header currentUser={this.props.currentUser} />
        </div>
      </div>
    )
  }
}

export default SideBarMain;
