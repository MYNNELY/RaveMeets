/* eslint-disable react/jsx-key */
import React, {useState} from 'react';
import {Button, ImageList, ImageListItem, ImageListItemBar} from '@material-ui/core';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Grid_div = styled.div`
margin: 20px;
width: 100%;
display: flex;
justifyContent: 'space-around';
align-items: center;
overflow: 'hidden',
flex-wrap: wrap;
`;

// const theme = createMuiTheme({
//   overrides: {
//     MuiButton: {
//       root: {
//         borderRadius: 8,
//       },
//     },
//   },
// })

const Events = ({events, feedTitle}) => {
  // if (!upcomingEvents) {
  //   return (
  //     <div
  //       style={{
  //         marginRight: '50px',
  //         width: '375px',
  //         fontWeight: '600',
  //         fontSize: '18px',
  //       }}
  //     >
  //       <div
  //         style={{
  //           marginBottom: '2.5%',
  //         }}
  //       >
  //       Upcoming Events
  //       </div>
  //       <span style={{fontSize: '14px'}}>No Events Yet</span>
  //     </div>
  //   );
  // }

  const [raves, setRaves] = useState([
    {
      img: 'https://www.rivermendhealth.com/wp-content/uploads/2016/02/tumblr_static_filename_640_v2.png',
      title: 'Porter Robinson',
      author: 'October 25, 2021',
      attended: false,
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
      attended: false,
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
      attended: false,
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
      attended: false,
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
      attended: false,
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
      attended: false,
    },
    {
      img: 'https://static.billboard.com/files/media/northern-lights-music-festival-by-peter-karas-2019-billboard-1548-768x433.jpg',
      title: 'Bike',
      author: 'October 25, 2021',
      attended: false,
    },
  ]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '48%',
        fontWeight: '600',
        fontSize: '20px',
      }}
    >
      <div
        style={{
        }}
      >
        {feedTitle}
      </div>
      <Container>
        <Grid_div>
          <ImageList rowHeight={250} cols={1}>
            {raves.map((rave) => (
              <ImageListItem>
                <img
                  src={`${rave.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${rave.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={rave.title}
                  loading="lazy"
                />
                <ImageListItemBar title={rave.title} subtitle={rave.author} />
                <Button
                  variant="contained"
                  disableElevation
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                >
                  <span style={{color: 'black'}}>Attended</span>
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid_div>
      </Container>
    </div>
  );
};

export default Events;

