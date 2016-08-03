import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'specs.insert': function(specTitle, teamId) {
    return Specs.insert({
      createdAt: new Date(),
      specTitle,
      team: teamId,
      createdBy: this.userId,
      content: {},
    });
  }
});

export const Specs = new Mongo.Collection('specs');
