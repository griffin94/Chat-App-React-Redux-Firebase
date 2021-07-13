import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import database, { CHANNELS } from './firebase/firebase';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [channels, setChannels] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getChannels();
  }, []);

  const getChannels = () => {
    database.collection(CHANNELS).onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        })),
      );
    });
  };

  return (
    <AppContainer>
      <Router>
        <Header />
        {user ? (
          <Main>
            <Sidebar channels={channels} />
            <Switch>
              <Route path="/channel/:channelId" component={Chat} />
              <Route path="/" component={Login} exact />
              <Route>Not Found</Route>
            </Switch>
          </Main>
        ) : (
          <Login setUser={setUser} />
        )}
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 40px 1fr;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 260px 1fr;
`;
