import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/collections/teams';
import { Templates } from '../imports/collections/templates';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  Meteor.publish('teams', function() {
    return Teams.find({ createdBy: this.userId });
  });

  //TODO: Figure out how to show only the templates owned by teams

  Meteor.publish('templates', function() {
    console.log("////////////// NEW REQUEST ////////////////////");

    // Get the logged in user's email
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;
    console.log(email);

    // This gives every Team Object the logged in user is a member of.
    const teamList = Teams.find({ members: email });
    console.log("TeamList: " + teamList);

    // This should go through each team the user is a part of and publish
    // the templates they are a part of.
    
    // const templateList = [];
    const teamMap = teamList.map(userTeam => {
      const teamMapId = userTeam._id
    });

    // return templateList;
    return Templates.find({});
  });
});
