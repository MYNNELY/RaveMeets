import styled, {keyframes} from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

const customScroll = `
  &::-webkit-scrollbar {
  width: 8px;
  }
  &::-webkit-scrollbar-track {
  background-color: transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(230,230,230,0.4);
    border-radius: 25px;
  }
  &:hover::-webkit-scrollbar-thumb {
   background-color: rgba(230,230,230,0.7);
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 37.5%;
  left: 42.5%;
  width: 95px;
  height: 95px;
`;

export const SpinPath = styled.div`
  position: absolute;
  border: 10px solid #bec0c0;
  height: 75px;
  width: 75px;
  border-radius: 50%;
`;

export const Spinner = styled(SpinPath)`
  border: 10px solid transparent;
  border-bottom: 10px solid #1c87c9;
  animation-name: ${spinAnimation};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const MapContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #ddd;
`;

export const GridContainer = styled.div`
  background-color: #021F3C;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GridWrapper = styled.div`
  width: max-content;
  height: 140px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: auto;
  overflow-x: hidden;
  ${customScroll}
`;

export const PerformerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 70px;
  overflow: hidden;
`;

export const PerformerIcon = styled.div`
  height: 55px;
  width: 55px;
  background-color: #C4C4C4;
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


