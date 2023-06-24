import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';

import Select from 'react-select';

import { SymptomsCollection } from '/imports/api/symptoms';

import Layout from '/imports/ui/layout/Layout';
function Ailment() {
  const [ailment, setAilment] = useState({ name: '', description: '', symptoms: [] });
  const history = useHistory();
  const handleClick = () => history.push('/aliments');

  const setField = (field, value) => {
    setAilment({ ...ailment, [field]: value });
  };

  const saveAilment = () => {
    if (!ailment.name || !ailment.description || !ailment.symptoms.length) return;

    return Meteor.call(
      'ailments.create',
      { ...ailment, symptoms: ailment.symptoms.map(doc => doc.value) },
      error => {
        if (!error) {
          return handleClick();
        }

        return alert('ERROR');
      }
    );
  };

  useTracker(() => {
    Meteor.subscribe('symptoms.all');
  }, []);

  const symptomsArray = useTracker(() => SymptomsCollection.find({}).fetch(), []);

  const symptomsOptions = symptomsArray.map(doc => ({ value: doc._id, label: doc.name }));

  return (
    <Layout>
      <div className="wrapper row2">
        <div id="pagetitle" className="hoc clear">
          <h2></h2>
        </div>
        <div id="breadcrumb" className="hoc clear">
          <ul>
            <li>
              <a href="C:/Users/itame/Desktop/escarine-med/index.htm">Головна</a>
            </li>
            <li>
              <a href="../full-width.html">Хвороби</a>
            </li>
            <li>
              <a href="#">Добавити хворобу</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <h1>Добавити хворобу</h1>
          <div className="content three_quarter first">
            <div className="hoc">
              <span>
                <label>Назва хвороби</label>
                <input
                  value={ailment.name}
                  type="text"
                  onChange={event => setField('name', event.target.value)}
                />
              </span>
              <span>
                <label>Симптоми</label>

                <Select
                  isMulti
                  options={symptomsOptions}
                  value={ailment.symptoms}
                  onChange={selectedOptions => setField('symptoms', selectedOptions)}
                />
              </span>

              <span>
                <label>Опис</label>
                <textarea
                  className="description"
                  value={ailment.description}
                  type="text"
                  onChange={event => setField('description', event.target.value)}
                />
              </span>

              <button onClick={() => setAilment({ name: '', description: '', symptoms: [] })}>
                Очистити
              </button>
              <button onClick={saveAilment}>Зберегти</button>
            </div>
            <div className="clear"></div>
          </div>
        </main>
      </div>

      <div className="wrapper row4"></div>
    </Layout>
  );
}
export default Ailment;
