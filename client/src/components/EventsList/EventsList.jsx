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

const Banner = styled.div`
height: 300px;
width: 1500px;
background-color: whitesmoke;
margin: 20px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Grid_div = styled.div`
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
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ]);
  let match = useRouteMatch();
  return (
    <Container>
      Event List
      <Banner/>
      <Grid_div>
        <ImageList rowHeight={300} cols={4} >
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
