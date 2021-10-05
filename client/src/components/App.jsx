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
import SearchAppBar from './NavBar/SearchAppBar.jsx';
import UserContext from './userContext.jsx';
import MapContext from './mapContext.jsx';
import {getKey} from './EventPage/functions';
import SearchBar from './SearchBar/SearchBar.jsx';

const App = () => {
  const localStorageUsername = localStorage.getItem('username');
  const [userInfo, setUserInfo] = useState();
  const [apiKey, setApiKey] = useState();

  useEffect(() => {
    if (localStorageUsername) {
      setUserInfo({username: localStorageUsername});
    }
    getKey(setApiKey);
  }, []);

  return (

    <UserContext.Provider value={{userInfo, setUserInfo}}>
      <MapContext.Provider value={apiKey}>
        <SearchAppBar />
      </MapContext.Provider>
    </UserContext.Provider>

  );
};


export default App;


