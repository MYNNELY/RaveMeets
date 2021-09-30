import axios from 'axios';

export const getEvent = (id, callback) => {
  axios.get(`http://54.176.43.199:3000/events/${id}`).then((data) => callback(data.data[0])).catch((e) => console.log(e));
};

export const capitalizeString = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

export const getKey = (callback) => {
  axios.get('/auth/maps')
      .then(({data}) => callback(data))
      .catch((e) => console.error(e));
};

const isSameDate = (date1, date2) => {
  return date1 === date2 ? date1 : `${date1} - ${date2}`;
};

const toAmPm = (time) => {
  const times = time.split(':');
  const hour = Number(times[0]);
  const minutes = times[1];
  if (hour === 0) return `${hour}:${minutes}AM`;
  if (hour === 12) return `${hour}:${minutes}PM`;
  if (hour > 12) return `${hour-12}:${minutes}PM`;
  return `${hour}:${minutes}AM`;
};

export const getTime = (date1, date2) => {
  if (date1 && date2) {
    date1 = new Date(date1).toString();
    date2 = new Date(date2).toString();
    date1 = date1.split(' ');
    date2 = date2.split(' ');
    const stringDate1 = date1.slice(1, 3).join(' ');
    const stringDate2 = date2.slice(1, 3).join(' ');
    const date = isSameDate(stringDate1, stringDate2);
    const time1 = toAmPm(date1[4].substring(0, 5));
    const time2 = toAmPm(date2[4].substring(0, 5));
    const time = [time1, time2];
    return {date, time};
  }
};

export const getGenres = (genres) => {
  if (!genres) return null;
  const genreNames = [];
  genres.forEach(({genre_name}) => {
    genreNames.push(genre_name);
  });
  return genreNames.join('  •  ');
};

export const refactorAddress = (address) => {
  return address.replaceAll(' ', '+');
};
