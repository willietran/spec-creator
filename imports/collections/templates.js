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

  //TODO:
  // -Create the template section creation route
  // -Create the template section creation components
  // -Create onChange event logic for section input field
  // --See: https://docs.mongodb.com/manual/reference/operator/update/push/
  // -Test to see if the 'templates.addSection' method works...
  // -Create the template creation route
  // -Create the template creation components

  'templates.addSection': function(template, newSection) {
    return Templates.update(
      template, { $push: { sections: newSection } }
    );
  },

});

export const Templates = new Mongo.Collection('templates');
