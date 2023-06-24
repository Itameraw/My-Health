import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const AilmentsCollection = new Mongo.Collection('ailments');

import { SymptomsCollection } from './symptoms';

if (Meteor.isServer) {
  Meteor.methods({
    'ailments.create'({ name, description, symptoms }) {
      AilmentsCollection.insert({
        name,
        symptoms,
        description,
        createdByUserId: Meteor.userId(),
      });
    },
  });
  if (Meteor.isServer) {
    Meteor.methods({
      'ailment.remove.byId'({ ailmentId }) {
        AilmentsCollection.remove({ _id: ailmentId });
      },
    });
  }
  Meteor.publish({
    'ailments.all'() {
      return AilmentsCollection.find({});
    },
    'ailments.getOneById'(ailmentId) {
      const ailmentCursor = AilmentsCollection.find({ _id: ailmentId });
      const allSymptomIds = ailmentCursor
        .fetch()
        .reduce((memo, { symptoms = [] } = {}) => [...memo, ...symptoms], []);

      const symptomsCursor = SymptomsCollection.find({ _id: { $in: allSymptomIds } });

      return [ailmentCursor, symptomsCursor];
    },
  });
}
