import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'specs.insert': function(specTitle, teamId) {
    return Specs.insert({
      createdAt: new Date(),
      specTitle,
      team: teamId,
      createdBy: this.userId,
      content: {}
    });
  },

  'specs.updateContent': function(spec, contentQuestion, newContent) {
    return Specs.update(
      spec._id,
      { $set: { ["content." + contentQuestion]: newContent } }
    );
  }
});

export const Specs = new Mongo.Collection('specs');
