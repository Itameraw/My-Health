import { Roles } from 'meteor/alanning:roles';

Roles.createRole('user', { unlessExists: true });

Roles.createRole('admin', { unlessExists: true });

Meteor.publish({
  'roles.all'() {
    return Roles.getUsersInRole();
  },
});
