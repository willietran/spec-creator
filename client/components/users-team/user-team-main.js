import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

//Import collections
import Template from '../../../imports/collections/templates.js';

class UserTeamMain extends Component {
  render() {
    return (
      <div>User Team Main</div>
    );
  }
};

export default createContainer((props) => {
  Meteor.subscribe('templates');

  return { template: Template.find({ createdBy: this.userId })}
}, UserTeamMain);
