import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import EventsList from './EventsList/EventsList.jsx';
import GroupsList from './GroupsList/GroupsList.jsx';
import Profile from './Profile/Profile.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/events">Events</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/profile">Profile</Link>
        <Switch>
          <Route path="/events">
            <EventsList />
          </Route>
          <Route path="/groups">
            <GroupsList />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


export default App;
