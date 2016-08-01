import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/collections/teams';
import { Templates } from '../imports/collections/templates';

Meteor.startup(() => {
  Meteor.publish('teams', function() {
    return Teams.find({ createdBy: this.userId });
  });

  Meteor.publish('templates', function() {
    // Get the logged in user's email
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;

    // This gives every Team Object the logged in user is a member of.
    const teamList = Teams.find({ members: email });

    // This goes through each team the user is a part of and publish
    // the templates they are a part of.
    const templateList = [];
    teamList.map(userTeam => {
      templateList.push(userTeam._id);
    });

    return Templates.find({ team: { $in: templateList } });
  });
});
