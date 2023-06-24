import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import Layout from '/imports/ui/layout/Layout';
function Symptom() {
  const [symptom, setSymptom] = useState({ name: '', description: '' });

  const history = useHistory();
  const handleClick = () => history.push('/symptoms');

  const setField = (field, value) => {
    setSymptom({ ...symptom, [field]: value });
  };

  const saveSymptom = () => {
    if (!symptom.name || !symptom.description) return;

    return Meteor.call('symptoms.create', symptom, error => {
      if (!error) {
        return handleClick();
      }

      return alert('ERROR');
    });
  };

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
              <a href="../full-width.html">Симптом</a>
            </li>
            <li>
              <a href="#">Добавити симптом</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content three_quarter first">
            <div className="hoc">
              <h1>Добавити симптом</h1>
              <span>
                <label>Назва симптому</label>
                <input
                  value={symptom.name}
                  type="text"
                  onChange={event => setField('name', event.target.value)}
                />
              </span>
              <span>
                <label>Опис</label>
                <textarea
                  className="tablSim"
                  value={symptom.description}
                  type="text"
                  onChange={event => setField('description', event.target.value)}
                />
              </span>

              <button onClick={() => setSymptom({ name: '', description: '' })}>Очистити</button>
              <button onClick={saveSymptom}>Зберегти</button>
            </div>

            <div className="clear"></div>
          </div>
        </main>
      </div>

      <div className="wrapper row4"></div>
    </Layout>
  );
}
export default Symptom;
