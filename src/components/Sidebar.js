import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import database, { CHANNELS } from '../firebase/firebase';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';

function Sidebar({ channels }) {
  const { push } = useHistory();

  const addNewChannel = () => {
    const channelName = prompt('Type new room name');
    channelName &&
      database.collection(CHANNELS).add({
        name: channelName,
      });
  };

  const goToChannel = (id) => push(`/channel/${id}`);

  return (
    <Container>
      <ChannelsContainer>
        <NewChannelContainer>
          <Label>Channels</Label>
          <Button onClick={addNewChannel}>
            <AddIcon />
          </Button>
        </NewChannelContainer>
        <ChannelList>
          {channels.map((channel) => (
            <Channel key={channel.id} onClick={() => goToChannel(channel.id)}>
              # {channel.name}
            </Channel>
          ))}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.aside`
  background: orange;
`;
const ChannelsContainer = styled.div``;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;
const Label = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChannelList = styled.ul``;
const Channel = styled.li`
  cursor: pointer;
  padding: 6px;
  &:hover {
    background: gray;
  }
`;
