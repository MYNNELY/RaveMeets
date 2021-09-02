import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Chat,
  Channel,
  useChatContext,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
  MessageTeam
} from 'stream-chat-react';

//message team is deprecated so hmm
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

const ChannelListContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, setCreateType, createType }) => {





  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>

    )
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>


    )
  }



  const EmptyState = () => {
    return (
        <div className="channel-empty__container" style={{backgroundColor: "lightblue"}}>
            <p className="channel-empty__first">This is the beginning of your chat history.</p>
            <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
        </div>
    )
  }

  return (
    <div className="channel__container" style={{backgroundColor: "lightblue"}}>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing}/>
      </Channel>
    </div>

  );
};


export default ChannelListContainer;
