import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container style={{ backgroundColor: 'green' }}>
      <Main>Some menu</Main>
      <UserContainer>User</UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Main = styled.div``;
const UserContainer = styled.div``;
