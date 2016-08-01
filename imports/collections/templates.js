import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'templates.insert': function(templateTitle, teamId) {
    return Templates.insert({
      createdAt: new Date(),
      templateTitle,
      team: teamId,
      createdBy: this.userId,
    });
  }
});

export const Templates = new Mongo.Collection('templates');
