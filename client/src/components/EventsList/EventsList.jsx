/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Button, ImageList, ImageListItem, ImageListItemBar} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
  const [raves, setRaves] = useState([]);
  useEffect(() => {
    axios.get('http://54.176.43.199:3000/events')
      .then(({data}) => {setRaves(data)})
      .catch((err) => console.error(err));
  }, [])
  const history = useHistory();
  return (
    <Container>
      <ImageList  rowHeight={300} cols={1} >
      <ImageListItem >
        <Banner src={`https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg?w=248&fit=crop&auto=format`}/>
        <ImageListItemBar  title={'Neverland'} subtitle={new Date('2022-11-06T20:00:00.000Z').toUTCString()}/>
      </ImageListItem>
      </ImageList>
      <Grid_div>
        <ImageList rowHeight={250} cols={4} style={{cursor: 'pointer'}}>
          {raves.map((rave, index) => (
            <ImageListItem>
              <img
                key={index}
                style={{display: "block"}}
                src={`${rave.event_banner_url}?w=248&fit=crop&auto=format`}
                srcSet={`${rave.event_banner_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={rave.name}
                loading="lazy"
                onClick={(e) => {history.push(`/eventpage/${rave._id}`)}}
              />
              <ImageListItemBar title={rave.name} subtitle={new Date(rave.start_date).toUTCString()}/>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid_div>
    </Container>
  );
};

export default EventList;
