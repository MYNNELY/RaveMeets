import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import axios from 'axios';




//why can't i just put hook in here?

const AddFriend = ({data}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');


  const changeValue = (event)=> {
    setName(event.target.value);
  }

  const changeRole = (event)=> {
    setRole(event.target.value);
  }

  console.log(data._id, 'add stuff');

  const addition = (event)=> {
    console.log(name, 'this should be the name');
    axios.post(`http://54.176.43.199:3000/groups/${data._id}/members`, {
      username: name,
      role: role,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  return (
    <>
      <form>
        <label>
          Name:
          <input style={{color: "black"}} type="text" value={name} onChange={changeValue} />
        </label>

        <label>
          Role:
          <input style={{color: "black"}} type="text" value={role} onChange={changeRole} />
        </label>
      </form>


      <Button onClick={addition} variant="contained" color="primary">
        Add Friend
      </Button>
    </>
  );
};


export default AddFriend;
