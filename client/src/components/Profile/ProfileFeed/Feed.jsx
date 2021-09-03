import React, {useState, useEffect} from 'react';
import Events from './Events.jsx';

const Feed = (/* { pastEvents, upcomingEvents }*/) => {
  const raves = [
    {
      img: 'https://www.rivermendhealth.com/wp-content/uploads/2016/02/tumblr_static_filename_640_v2.png',
      title: 'Porter Robinson',
      author: 'October 25, 2021',
      attended: true,
    },
    {
      img: 'https://media-prd.coachella.com/content/content_images/76/l9p4FisVDiBKRjVfhJ8W3O3OjDw6lV0wMYtOd0NV.jpeg',
      title: 'Coachella',
      author: 'October 25, 2021',
      attended: false,
    },
    {
      img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B16A/production/_112981454_rave.jpg',
      title: 'Audiotistic',
      author: 'October 25, 2021',
      attended: true,
    },
    {
      img: 'https://media.pitchfork.com/photos/5df07bc086d8e90008993d22/16:9/w_4640,h_2610,c_limit/Coachella.jpg',
      title: 'Burning Man',
      author: 'October 25, 2021',
      attended: false,
    },
    {
      img: 'https://www.hollywoodreporter.com/wp-content/uploads/2020/03/coachella.jpg?w=1024',
      title: 'Escape',
      author: 'October 25, 2021',
      attended: true,
    },
    {
      img: 'https://themusicessentials.com/wp-content/uploads/2020/10/student-raves.jpg',
      title: 'Wonderland',
      author: 'October 25, 2021',
      attended: false,
    },
    {
      img: 'https://thumbs.dreamstime.com/b/lasers-rave-party-club-lasers-rave-party-club-bright-blue-purple-colors-104108163.jpg',
      title: 'Lost Lands',
      author: 'October 25, 2021',
      attended: true,
    },
    {
      img: 'https://i.ytimg.com/vi/WKuaujIHBT4/maxresdefault.jpg',
      title: 'Ultra Miami',
      author: 'October 25, 2021',
      attended: false,
    },
    {
      img: 'https://i.pinimg.com/originals/09/7a/8e/097a8e449723a79b7bb6bc32d311141f.jpg',
      title: 'RL Grime',
      author: 'October 25, 2021',
      attended: true,
    },
    {
      img: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1489706284000/photosp/4a5ce05b-493b-4dc6-867c-01b2887932fd/stock-photo-light-love-music-festival-lights-rave-coachella-plur-4a5ce05b-493b-4dc6-867c-01b2887932fd.jpg',
      title: 'Tomato basil',
      author: 'October 25, 2021',
      attended: false,
    },
    {
      img: 'https://www.edmsauce.com/wp-content/uploads/2017/09/edm-3.jpg',
      title: 'Sea star',
      author: 'October 25, 2021',
      attended: true,
    },
    {
      img: 'https://static.billboard.com/files/media/northern-lights-music-festival-by-peter-karas-2019-billboard-1548-768x433.jpg',
      title: 'Bike',
      author: 'October 25, 2021',
      attended: false,
    },
  ];

  const upcomingEvents = [];
  const pastEvents = [];

  raves.forEach((rave) => {
    if (rave.attended) {
      pastEvents.push(rave);
    } else {
      upcomingEvents.push(rave);
    }
  });

  return (
    <div
      className='feed_container'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Events events={upcomingEvents} feedTitle={'Upcoming Events'}/>
      <Events events={pastEvents} feedTitle={'Past Events'}/>
    </div>
  );
};

export default Feed;
