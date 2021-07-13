import React from 'react';
import styled from 'styled-components';

function Message({ id, content, timestamp, user, userImage }) {
  const date = new Date(timestamp.toDate()).toUTCString();

  return (
    <Container>
      <p>{user}</p>
      <p>{date}</p>
      <p>{content}</p>
      <img
        src={userImage}
        alt="user"
        style={{ width: '50px', height: '50px' }}
      />
    </Container>
  );
}

export default Message;

const Container = styled.div`
  background-color: #fff;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 8px;
`;
