  import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Templates } from '../../../imports/collections/templates';
import { Teams } from '../../../imports/collections/teams';

class TemplateList extends Component {
  renderList() {
    return this.props.templates.map(template => {
      const url = template._id;
      const userTeamName = Teams.findOne({ _id: template.team }).teamName

      return (
        <li className="list-group-item" key={template._id}>
          <Link to={url}>Template Title: {template.templateTitle}</Link>
          <p>Team: {userTeamName}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
};

export default createContainer((props) => {
  const { teamId } = props.params;
  Meteor.subscribe('templates');
  Meteor.subscribe('teams');

  return {
    templates: Templates.find({ team: teamId }).fetch()
  };
}, TemplateList);
