import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/App';

import './main.html';

import '/imports/ui/styles/';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-top'));
});

