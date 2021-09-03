import React from 'react';
import {Paper} from '@material-ui/core';
import {SidePanel, SidePanelList, SidePanelListItem} from './Styled';

const SideInfo = ({lineup}) => {
    return (
        <SidePanel>
            <Paper
                style={{
                background: '#1b2d46',
                padding: '0.2em 0',
                marginBottom: '1em',
                width: '100%',
                }}
            >
                <div
                style={{
                    position: 'relative',
                    margin: '12px',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                }}
                >
            Lineup
                <div
                    style={{
                    marginLeft: '12px',
                    fontWeight: 400,
                    fontSize: '14px',
                    }}
                >
                </div>
                </div>
            </Paper>
            <SidePanelList>
                {lineup.map(
                    (object) =>
                    <SidePanelListItem>{object.artist_name}</SidePanelListItem>
                )}
            </SidePanelList>
        </SidePanel>
    );
}

export default SideInfo;