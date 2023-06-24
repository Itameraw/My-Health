import { Roles } from 'meteor/alanning:roles';

const users = [{ name: 'Admin', email: 'admin@admin.com', roles: ['admin'], roleType: 'admin' }];

users.forEach(function (user) {
  if (!Meteor.users.findOne({ 'emails.address': user.email })) {
    const userId = Accounts.createUser({
      _id: 'QwkSmTCZiw5KDx3L6',
      email: user.email,
      password: 'apple1',
      profile: { name: user.name, roleType: user.roleType },
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(userId, user.roles);
    }
  }
});
Meteor.publish({
  'users.all'() {
    return Meteor.users.find({});
  },
});
if (Meteor.isServer) {
  Meteor.methods({
    'users.remove.byId'({ userId }) {
      Meteor.users.remove({ _id: userId });
    },
  });
}
