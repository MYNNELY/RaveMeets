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
import GroupImg from './SingleGroupPage/GroupImg.jsx';
import GroupImg2 from './SingleGroupPage/GroupImg2.jsx';
import Chatroom from './SingleGroupPage/Chatroom.jsx';
import SearchAppBar from './NavBar/SearchAppBar.jsx';


const App = () => {
  const [userInfo, setUserInfo] = useState();
  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      <SearchAppBar />
    </UserContext.Provider>
    <Router>
      <div>
        <Link to="/events">Events</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/profile">profile</Link>
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


// import SingleGroupPage from './SingleGroupPage/SingleGroupPage.jsx'
import UserContext from './userContext';

// const App = () => {
//   return (<div>
//     <SingleGroupPage />

//     </div>
//   )
