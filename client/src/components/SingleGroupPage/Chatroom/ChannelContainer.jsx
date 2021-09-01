//should be channellistcontianer
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Chat,
  useChatContext,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';

import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from './assets/hospital.png';
import LogoutIcon from './assets/logout.png';

//why can't i just put hook in here?

const SideBar = () => {

  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30" />

        </div>

      </div>

      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="Logout" width="30" />

        </div>

      </div>
    </div>
  )
}

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">MedicalPager</p>
    </div>
  )
}


const ChannelContainer = () => {


  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listprops) => (
            <TeamChannelList
              {...listprops}
              type="team"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listprops) => (
            <TeamChannelList
              {...listprops}
              type="messaging"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />

      </div>
    </>

  );
};


export default ChannelContainer;
