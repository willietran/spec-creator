import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/collections/teams';
import { Templates } from '../imports/collections/templates';
import { Specs } from '../imports/collections/specs';

Meteor.startup(() => {

  Meteor.publish('teams', function() {
    return Teams.find({ createdBy: this.userId });
  });

  Meteor.publish('templates', function() {
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;
    const teamList = Teams.find({ members: email });
    const teamListMap = teamList.map(userTeam => userTeam._id);

    return Templates.find({});
  });

  Meteor.publish('specs', function() {
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;
    const teamList = Teams.find({ members: email });
    const teamListMap = teamList.map(userTeam => userTeam._id);

    return Specs.find({ team: { $in: teamListMap } });
  })
});
