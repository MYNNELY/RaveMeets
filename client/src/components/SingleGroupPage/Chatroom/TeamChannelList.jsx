import React from 'react';
import { addChannel } from './assets';

//why can't i just put hook in here?

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          connection error, please wait a moment and try again.
        </p>

      </div>
    ) : null
  }

  if (loading) {
    <div className="team-channel-list">
      <p className="team-channel-list__message loading">
        {type === 'team' ? 'Channels' : 'Messages'} loading
      </p>

    </div>

  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direc Messages'}

        </p>
        {/* add channel */}
      </div>
      {children}
    </div>

  );
};


export default TeamChannelList;
