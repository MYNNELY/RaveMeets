import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Button} from '@material-ui/core';

const EventList = () => {
  const [raves, setRaves] = useState([]);
  let match = useRouteMatch();
  return (
    <div>
      Event List
      <Link to={`${match.url}/eventpage`}>Event Page</Link>
    </div>
  );
};


export default EventList;
