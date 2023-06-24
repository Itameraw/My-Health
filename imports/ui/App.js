import React, { createContext, useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import Links from '/imports/ui/pages/Link';
import Home from '/imports/ui/pages/Home';
import Gallery from '/imports/ui/pages/Gallery';
import Ailments from '/imports/ui/pages/Ailments';
import Symptoms from '/imports/ui/pages/Symptoms';
import About from '/imports/ui/pages/About';
import Ailment from './pages/Ailment';
import Symptom from './pages/Symptom';
import Simpt from './pages/Simpt';
import Ail from './pages/Ail';
import Tactical from './pages/Tactical';
import Users from './pages/Users';

export const UserSessionContext = createContext();

const App = () => {
  const [userSession, setUserSession] = useState({ isAdmin: false });
  useTracker(() => {
    if (Meteor.user()) {
      setUserSession({
        isAdmin: Meteor.user().profile && Meteor.user().profile.roleType === 'admin',
      });
    }
  }, []);
  return (
    <UserSessionContext.Provider value={userSession}>
      <Router>
        <Switch>
          <Route path="/symptom/:id">
            <Simpt />
          </Route>
          <Route path="/ailment/:id">
            <Ail />
          </Route>
          <Route path="/newSymptom">
            <Symptom />
          </Route>
          <Route path="/newAilment">
            <Ailment />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/symptoms">
            <Symptoms />
          </Route>
          <Route path="/ailments">
            <Ailments />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/tactical">
            <Tactical />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserSessionContext.Provider>
  );
};

export default App;
