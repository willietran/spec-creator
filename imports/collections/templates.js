import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'templates.insert': function(templateTitle, teamId) {
    return Templates.insert({
      createdAt: new Date(),
      templateTitle,
      team: teamId,
      createdBy: this.userId,
      sections: [],
    });
  },

  'templates.remove': function(template) {
    return Templates.remove(template);
  },

  'templates.addSection': function(template, newSection) {
    return Templates.update(
      template, { $push: { sections: newSection } }
    );
  },

});

export const Templates = new Mongo.Collection('templates');
