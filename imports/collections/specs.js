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
    // https://docs.mongodb.com/v2.6/reference/operator/update/set/#set-fields-in-embedded-documents
    const key = "content." + contentQuestion;
    return Specs.update(
      spec._id,
      { $set: { key: newContent } }
    );
  }
});

export const Specs = new Mongo.Collection('specs');
