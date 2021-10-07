import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 2em auto 0;
  background-color: red;
  height: 810px;
`;

export const EventContainer = styled.div`
  width: 1500px;
  height: 250px;
  background-color: blue;
`;

export const MemberContainer = styled.div`
  width: 400px;
  height: 245px;
  background-color: purple;
`;

export const ChatContainer = styled.div`
  width: 950px;
  height: 500px;
  background-color: green;
  position: sticky;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ImagesContainer = styled.div`
  width: 400px;
  height: 230px;
  background-color: black;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const VerticalContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const VerticalContainerTwo = styled.div`
  margin-right: 25px;
`;