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

const SingleGroupPage = () => {
  const {id} = useParams();
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    getGroupData(id, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        setGroupData(result.data[0]);
      }
    });
  }, [id]);

  return (
    <Container>
      <EventContainer>
        <span>Event</span>
      </EventContainer>
      <SubContainer>
        <VerticalContainerOne>
          <MemberContainer>
            <span>Members</span>
          </MemberContainer>
          <ImagesContainer>
            <span>Images</span>
          </ImagesContainer>
        </VerticalContainerOne>
        <VerticalContainerTwo>
          <ChatContainer>
            <span>Chat</span>
          </ChatContainer>
        </VerticalContainerTwo>
      </SubContainer>
    </Container>
  );
};

export default SingleGroupPage;
