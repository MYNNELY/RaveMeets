import axios from 'axios';

export const getEvent = (id, callback) => {
  axios.get(`http://54.176.43.199:3000/events/${id}`).then((data) => callback(data.data[0])).catch((e) => console.log(e));
};

const isSameDate = (date1, date2) => {
  if (date1.date === date2.date) {
    return `${date1.date} | ${date1.time}-${date2.time}`;
  } else {
    return `${date1.date} | ${date1.time} - ${date2.date} | ${date2.time}`;
  }
};

export const getTime = (date1, date2) => {
  if (date1 && date2) {
    date1 = new Date(date1).toString();
    date2 = new Date(date2).toString();
    date1 = date1.split(' ');
    date2 = date2.split(' ');

    date1 = {date: date1.slice(1, 4).join('-'), time: date1[4].substring(0, 5)};
    date2 = {date: date2.slice(1, 4).join('-'), time: date2[4].substring(0, 5)};

    return isSameDate(date1, date2);
  }
};
