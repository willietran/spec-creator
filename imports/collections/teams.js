import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'teams.insert': function(teamName) {
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;

    return Teams.insert({
      createdAt: new Date(),
      teamName,
      members: [email],
      createdBy: this.userId
    });
  },

  'teams.remove': function(team) {
    return Teams.remove(team);
  },

  'teams.updateName': function(team, newName) {
    return Teams.update(team._id, { $set: { teamName: newName } });
  },

  'teams.addMembers': function(team, email) {
    return Teams.update(team._id, { $push: { members: email } });
  },

  'teams.removeMembers': function(team, email) {
    return Teams.update(team._id, { $pull: { members: email } })
  }

});

export const Teams = new Mongo.Collection('teams');
