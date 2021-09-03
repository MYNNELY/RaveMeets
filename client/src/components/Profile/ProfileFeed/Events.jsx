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

const Events = ({events, feedTitle}) => {
  if (!events) {
    return (
      <div
        style={{
          marginRight: '50px',
          width: '375px',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        <div
          style={{
            marginBottom: '2.5%',
          }}
        >
        Upcoming Events
        </div>
        <span style={{fontSize: '14px'}}>No Events Yet</span>
      </div>
    );
  }

  console.log(events, feedTitle);

  const buttonTagger = (rave) => {
    if (rave.attended) {
      return 'Attended';
    }
    return 'Attending';
  };

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
            {events.map((rave) => (
              <ImageListItem>
                <img
                  src={`${rave.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${rave.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={rave.title}
                  loading='lazy'
                />
                <ImageListItemBar title={rave.title} subtitle={rave.author} />
                <Button
                  variant='contained'
                  size='small'
                  disableElevation
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    width: '100px',
                  }}
                >
                  <span style={{color: 'black'}}>{buttonTagger(rave)}</span>
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

