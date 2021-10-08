import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 2em auto 0;
  height: 810px;
`;

export const EventContainer = styled.div`
  width: 1500px;
  height: 250px;
`;

export const MemberContainer = styled.div`
  display: grid;
  grid-template-rows: 30px 10px 50px 50px 50px;
  width: 400px;
  height: 245px;
  padding-top: 7px;
`;

export const ChatContainer = styled.div`
  width: 950px;
  height: 500px;
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

export const MemberDetails= styled.div`
  display: grid;
  grid-template-columns: 30px 290px 30px;
  max-width: 400px;
  height: 35px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const MemberPictures = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const MemberName = styled.span`
  width: 350px;
  padding-left: 5px;
`;
