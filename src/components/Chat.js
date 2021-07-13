import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Message from './Message';
import database, { CHANNELS, MESSAGES } from '../firebase/firebase';
import firebase from 'firebase';

function Chat() {
  const [channel, setChannel] = useState({});
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { channelId } = useParams();

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  const getChannel = () => {
    database
      .collection(CHANNELS)
      .doc(channelId)
      .onSnapshot((snapshot) => {
        console.log(snapshot.data());
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    database
      .collection(CHANNELS)
      .doc(channelId)
      .collection(MESSAGES)
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        ),
      );
  };

  const sendMessage = () => {
    input &&
      database.collection(CHANNELS).doc(channelId).collection(MESSAGES).add({
        content: input,
        timestamp: firebase.firestore.Timestamp.now(),
      });
  };

  return (
    <Container style={{ backgroundColor: 'pink' }}>
      <Header>
        <ChannelName># {channel && channel.name}</ChannelName>
        <ChannelInfo>Channel Info</ChannelInfo>
      </Header>
      <MessageContainer>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </MessageContainer>
      <ChatInput>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </ChatInput>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;
const Header = styled.div`
  background-color: yellow;
  padding: 10px;
  border-bottom: 1px solid gray;
`;

const ChannelName = styled.div`
  font-weight: bold;
`;
const ChannelInfo = styled.div``;

const MessageContainer = styled.div`
  background-color: pink;
`;
const ChatInput = styled.div`
  background-color: blue;
`;
