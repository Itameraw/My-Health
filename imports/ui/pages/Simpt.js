import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { Link } from 'react-router-dom';
import React from 'react';

import { AilmentsCollection } from '/imports/api/ailments';
import { SymptomsCollection } from '/imports/api/symptoms';

import Layout from '/imports/ui/layout/Layout';
function Simpt() {
  let { id } = useParams();
  useTracker(() => {
    Meteor.subscribe('symptoms.getOneById', id);
  }, []);

  const symptomDoc = useTracker(() => SymptomsCollection.findOne({ _id: id }), [id]) || {};

  const ailmentArray = useTracker(() => AilmentsCollection.find({ symptoms: id }).fetch(), [id]);

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
              <a href="#">Симптоми</a>
            </li>
            <li>
              <a href="#">{symptomDoc.name}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="wrapper row3">
        <main class="hoc container clear">
          <div class="content three_quarter first">
            <h1>{symptomDoc.name}</h1>
            <p> {symptomDoc.description}</p>
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
              {ailmentArray.map(ailment => (
                <li>
                  <Link to={`/ailment/${ailment._id}`}>{ailment.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Simpt;
