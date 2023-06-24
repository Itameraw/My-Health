import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';

import Select from 'react-select';

import { SymptomsCollection } from '/imports/api/symptoms';

import Layout from '/imports/ui/layout/Layout';
function Users() {
  const userId = useTracker(() => Meteor.userId(), []);
  const deleteButton = userId => () => {
    Meteor.call('users.remove.byId', { userId }, error => {
      if (!error) {
        return;
      }

      return alert('ERROR');
    });
  };
  useTracker(() => {
    Meteor.subscribe('users.all');
  }, []);

  const usersArray = useTracker(() => Meteor.users.find({}).fetch(), []);
  return (
    <Layout>
      <div className="wrapper row2">
        <div id="pagetitle" className="hoc clear">
          <h2></h2>
        </div>
        <div id="breadcrumb" className="hoc clear">
          <ul>
            <li>
              <a href="../index.html">Головна</a>
            </li>
            <li>
              <a href="#">Користувачі</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <ul>
              {usersArray.map(user => (
                <li key={user._id}>
                  <span>{user.profile && user.profile.name}</span>
                  <span>
                    <p>{user.emails[0].address}</p>
                  </span>
                  <button
                    onClick={deleteButton(user._id)}
                    disabled={user.profile && user.profile.roleType === 'admin'}
                  >
                    Видалити
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </Layout>
  );
}
export default Users;
