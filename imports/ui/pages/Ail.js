import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { Link } from 'react-router-dom';
import React from 'react';

import { AilmentsCollection } from '/imports/api/ailments';
import { SymptomsCollection } from '/imports/api/symptoms';

import Layout from '/imports/ui/layout/Layout';
function Ail() {
  let { id } = useParams();

  useTracker(() => {
    Meteor.subscribe('ailments.getOneById', id);
  }, []);

  const ailmentDoc = useTracker(() => AilmentsCollection.findOne({ _id: id }), []) || {};
  const { symptoms = [] } = ailmentDoc;

  const symptomsArray = useTracker(
    () => SymptomsCollection.find({ _id: { $in: symptoms } }).fetch(),
    [ailmentDoc]
  );

  return (
    <Layout>
      <div class="wrapper row2">
        <div id="pagetitle" class="hoc clear">
          <h2></h2>
        </div>
        <div id="breadcrumb" class="hoc clear">
          <ul>
            <li>
              <a href="#">Головна</a>
            </li>
            <li>
              <a href="#">Хвороби</a>
            </li>
            <li>
              <a href="#">{ailmentDoc.name}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="wrapper row3">
        <main class="hoc container clear">
          <div class="content three_quarter first">
            <h1>{ailmentDoc.name}</h1>
            <p>{ailmentDoc.description}</p>
            <p></p>
            <p></p>

            <div class="clear"></div>
          </div>
        </main>
      </div>

      <div class="wrapper row4">
        <div className="hoc">
          <div id="comments">
            <ul className="ailments">
              {symptomsArray.map(symptom => (
                <li>
                  <Link to={`/symptom/${symptom._id}`}>{symptom.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Ail;
