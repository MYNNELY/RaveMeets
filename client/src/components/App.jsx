import React, {useState, useEffect} from 'react';
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
import UserContext from './userContext.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

const App = () => {
  const localStorageUsername = localStorage.getItem('username');
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (localStorageUsername) {
      setUserInfo({username: localStorageUsername});
    }
  }, []);

  return (

    <UserContext.Provider value={{userInfo, setUserInfo}}>
      <SearchAppBar />
    </UserContext.Provider>

  );
};


export default App;


// import SingleGroupPage from './SingleGroupPage/SingleGroupPage.jsx'
// const App = () => {
//   return (<div>
//     <SingleGroupPage />

//     </div>
//   )
