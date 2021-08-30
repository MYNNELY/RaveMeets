import React from 'react';
import EventList from './EventList/EventList.jsx';

const App = () => {
  return (
     <Router>
     <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/topics">Topics</Link>
         </li>
       </ul>

       <Switch>
         <Route path="/events">
           <EventList />
         </Route>
       </Switch>
     </div>
   </Router>
  )
};


export default App;
