import axios from 'axios';

export const getGroupData = (id, callback) => {
  axios.get(`http://54.176.43.199:3000/groups/${id}`)
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        callback(err, null);
      });
};
