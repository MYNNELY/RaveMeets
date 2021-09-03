import styled from 'styled-components';

export const StyledDescription = styled.div`
    line-height: 1.5em;
    overflow: hidden;
    max-height: 300px;
    max-width: 70%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledBannerContainer = styled.div`
    width: 100%;
    height: 400px;
    margin: 1em 0;
`;

export const StyledBannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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

export const SidePanel = styled.div`
    padding: 1em;
    padding-top: 0;
    max-width: 20%;
    text-align: center;
`;

export const SidePanelList = styled.div``;

export const SidePanelListItem = styled.div`
    margin-bottom: 0.5em;
`;
