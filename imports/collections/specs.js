import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'specs.insert': function(specTitle, teamId) {
    return Specs.insert({
      createdAt: new Date(),
      specTitle,
      team: teamId,
      createdBy: this.userId,
      content: []
    });
  },

  'specs.updateContent': function(spec, contentQuestion, newContent) {
    // Instead of an array of objects where each object just has one key-value pair,
    // make an array of arrays. Each inner array would be exactly 2 elements long. 
    // (Think of it like a tuple in python.)
    const questionContentPair = [contentQuestion, newContent];

    return Specs.update(
      spec._id,
      { $push: { content: questionContentPair } }
    );
  }
});

export const Specs = new Mongo.Collection('specs');
