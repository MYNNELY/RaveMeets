import styled from 'styled-components';

export const GridWrapper = styled.div`
  width: max-content;
  height: 140px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: auto;
`;

export const PerformerContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  width: 300px;
  height: 70px;
  overflow: hidden;
  border: 1px solid purple;
`;

export const PerformerIcon = styled.div`
  height: 55px;
  width: 55px;
  background-color: black;
  border-radius: 50%;
  margin-left: 1.5em;
  margin-right: 1em;
`;

export const PerformerName = styled.div`
  color: white;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${(props) => props.spaceless ? '0' : '1em'};
`;

export const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;

export const MainContainer = styled(FlexColumn)`
  max-width: 1500px;
  margin: 2em auto 0;
`;

export const SideContainer = styled(FlexColumn)`
  width: 43%;
  height: 100%;
  background-color: #36435E;
  align-items: center;
`;

export const StyledDescription = styled.p`
    margin: 0;
    line-height: 1.5em;
    overflow-y: scroll;
    max-height: 300px;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledSpan = styled.span`
    margin-right: 1em;
`;

export const StyledBannerContainer = styled.div`
    width: 55%;
    height: 100%;
`;

export const StyledBannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
`;

export const GroupModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 600px;
    border-radius: 10px;
    background-color: red;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 85px;
`;

export const SidePanel = styled.div`
    padding: 1em;
    padding-top: 0;
    margin-right: 0em;
    max-width: 20%;
    text-align: center;
`;

export const SidePanelListItem = styled.div`
    margin-bottom: 0.5em;
`;

export const TitleContainer = styled(FlexColumn)`
  width: 95%;
  height: 100%;
  margin: 0;
`;

export const EventTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 0.1em;
  letter-spacing: 0.2rem;
`;

export const TitleLine = styled.div`
  margin-bottom: 0.3em;
`;


