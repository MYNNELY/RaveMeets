import axios from 'axios';

export const getEvent = (id, callback) => {
  axios.get(`http://54.176.43.199:3000/events/${id}`).then((data) => callback(data)).catch((e) => console.log(e));
};
