import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { auth, provider } from '../firebase/firebase';

function Login({ setUser }) {
  // useEffect(() => signIn(), []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <button onClick={signIn}>Login</button>
    </Container>
  );
}

export default Login;

const Container = styled.div``;
