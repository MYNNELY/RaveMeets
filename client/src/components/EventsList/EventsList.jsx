import React, {useState, useEffect} from 'react';
import {Button} from '@material-ui/core';

const EventList = () => {
  const [raves, setRaves] = useState([]);
  useEffect(() => {
    axios.get('https://edmtrain.com/api/events?locationIds=36,94&client=a587cd4f-79ec-49ac-9db9-e3465ca6c192')
      .then((data) => {setRaves(data)})
      .catch((err) => {console.error(err)});
  });
  return (
    <div>
      GroupList
    </div>
  );
};


export default EventList;
