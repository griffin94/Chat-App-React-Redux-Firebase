import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';

function Sidebar({ rooms }) {
  console.log(rooms);
  return (
    <Container>
      <ChannelsContainer>
        <NewChannelContainer>
          <Label>Channels</Label>
          <Button>
            <AddIcon />
          </Button>
        </NewChannelContainer>
        <ChannelList>
          {rooms.map((room) => (
            <Channel key={room.id}># {room.name}</Channel>
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
