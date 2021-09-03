import styled from 'styled-components';

export const StyledDescription = styled.div`
    line-height: 1.5em;
    overflow: hidden;
    max-height: 300px;

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