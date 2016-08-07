import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'specs.insert': function(teamId) {
    return Specs.insert({
      createdAt: new Date(),
      specTitle: 'Give me a name...',
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
  },

  'specs.updateTitle': function(spec, newSpecTitle) {
    return Specs.update(
      spec._id,
      { $set: { specTitle: newSpecTitle } }
    );
  },

  'specs.remove': function(spec) {
    return Specs.remove(spec);
  }
});

export const Specs = new Mongo.Collection('specs');
