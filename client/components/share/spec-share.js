import React, { Component } from 'react';

class SpecShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('teams.addMembers', this.props.team, email)
    console.log(this.props.team)
  }

  renderList() {
    if(this.props.team) {
      return this.props.team.members.map(member => {
        return (
          <li className="list-group-item">{member}</li>
        );
      });
    }
  }


  render() {
    return(
      <footer className="spec-share">
        <div className="input-group">
          <input ref="email" className="form-control" />
          <div className="input-group-btn">
            <button
              onClick={this.onShareClick.bind(this)}
              className="btn btn-primary">
              Share
            </button>
          </div>
        </div>
        <div>
          <ul className="list-group">
            {this.renderList()}
          </ul>
        </div>
      </footer>
    );
  }
};

export default SpecShare;
