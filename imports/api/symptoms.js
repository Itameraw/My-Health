import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const SymptomsCollection = new Mongo.Collection('symptoms');

import { AilmentsCollection } from './ailments';

if (Meteor.isServer) {
  Meteor.methods({
    'symptoms.create'({ name, description }) {
      SymptomsCollection.insert({
        name,
        description,
        createdByUserId: Meteor.userId(),
      });
    },
  });
  if (Meteor.isServer) {
    Meteor.methods({
      'symptom.remove.byId'({ symptomId }) {
        SymptomsCollection.remove({ _id: symptomId });
      },
    });
  }
  Meteor.publish({
    'symptoms.all'() {
      return SymptomsCollection.find({});
    },
    'symptoms.getOneById'(symptomId) {
      const symptomCursor = SymptomsCollection.find({ _id: symptomId });
      const ailmentCursor = AilmentsCollection.find({ symptoms: symptomId });

      return [symptomCursor, ailmentCursor];
    },
  });
}
