/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Button, ImageList, ImageListItem, ImageListItemBar} from '@material-ui/core';

import EventTile from './EventTile.jsx';
import styled from 'styled-components';

const Banner = styled.img`
height: 300px;
width: 1500px;
background-color: whitesmoke;
object-fit: cover;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`

const Grid_div = styled.div`
margin: 20px;
width: 1500px;
display: flex;
justifyContent: 'space-around';
align-items: center;
overflow: 'hidden',
flex-wrap: wrap;
`

const EventList = () => {
  const [raves, setRaves] = useState([
    {
      img: 'https://www.rivermendhealth.com/wp-content/uploads/2016/02/tumblr_static_filename_640_v2.png',
      title: 'Porter Robinson',
      author: 'October 25, 2021',
    },
    {
      img: 'https://media-prd.coachella.com/content/content_images/76/l9p4FisVDiBKRjVfhJ8W3O3OjDw6lV0wMYtOd0NV.jpeg',
      title: 'Coachella',
      author: 'October 25, 2021',
    },
    {
      img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B16A/production/_112981454_rave.jpg',
      title: 'Audiotistic',
      author: 'October 25, 2021',
    },
    {
      img: 'https://media.pitchfork.com/photos/5df07bc086d8e90008993d22/16:9/w_4640,h_2610,c_limit/Coachella.jpg',
      title: 'Burning Man',
      author: 'October 25, 2021',
    },
    {
      img: 'https://www.hollywoodreporter.com/wp-content/uploads/2020/03/coachella.jpg?w=1024',
      title: 'Escape',
      author: 'October 25, 20213',
    },
    {
      img: 'https://themusicessentials.com/wp-content/uploads/2020/10/student-raves.jpg',
      title: 'Wonderland',
      author: '@October 25, 2021',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/lasers-rave-party-club-lasers-rave-party-club-bright-blue-purple-colors-104108163.jpg',
      title: 'Lost Lands',
      author: 'October 25, 2021',
    },
    {
      img: 'https://i.ytimg.com/vi/WKuaujIHBT4/maxresdefault.jpg',
      title: 'Ultra Miami',
      author: 'October 25, 2021n',
    },
    {
      img: 'https://i.pinimg.com/originals/09/7a/8e/097a8e449723a79b7bb6bc32d311141f.jpg',
      title: 'RL Grime',
      author: 'October 25, 2021',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: 'October 25, 2021',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: 'October 25, 2021',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: 'October 25, 2021s',
    },
  ]);
  let match = useRouteMatch();
  return (
    <Container>
      <ImageList  rowHeight={300} cols={1} >
      <ImageListItem >
        <Banner src={`https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg?w=248&fit=crop&auto=format`}/>
        <ImageListItemBar  title={'Lost in Dreams'} subtitle={'September 19'}/>
      </ImageListItem>
      </ImageList>
      <Grid_div>
        <ImageList rowHeight={250} cols={4} >
          {raves.map(rave => (
            <ImageListItem>
              <img
                src={`${rave.img}?w=248&fit=crop&auto=format`}
                srcSet={`${rave.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={rave.title}
                loading="lazy"
              />
              <ImageListItemBar title={rave.title} subtitle={rave.author}/>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid_div>
    </Container>
  );
};

export default EventList;
