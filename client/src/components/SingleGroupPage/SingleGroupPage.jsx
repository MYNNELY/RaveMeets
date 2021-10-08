import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getGroupData} from './functions';
import {Container,
  EventContainer,
  MemberContainer,
  ChatContainer,
  SubContainer,
  ImagesContainer,
  VerticalContainerOne,
  VerticalContainerTwo,
} from './styles';
import {Paper} from '@material-ui/core';
import Banner from './Banner.jsx';
import MembersList from './MembersList.jsx';

const SingleGroupPage = () => {
  const {id} = useParams();
  const [groupData, setGroupData] = useState(null);

  console.log(groupData);
  useEffect(() => {
    getGroupData(id, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        setGroupData(result.data[0]);
      }
    });
  }, [id]);

  if (groupData) {
    return (
      <Container>
        <Banner eventDetails = {groupData.event_details}/>
        <SubContainer>
          <VerticalContainerOne>
            <MembersList memberDetails = {groupData.members} />
            <ImagesContainer style={{
              backgroundColor: '#1b2d46',
              borderRadius: '10px',
            }}>
            </ImagesContainer>
          </VerticalContainerOne>
          <VerticalContainerTwo>
            <ChatContainer style={{
              backgroundColor: '#1b2d46',
              borderRadius: '10px',
            }}>
            </ChatContainer>
          </VerticalContainerTwo>
        </SubContainer>
      </Container>
    );
  } else {
    return (
      <></>
    );
  }
};

export default SingleGroupPage;
