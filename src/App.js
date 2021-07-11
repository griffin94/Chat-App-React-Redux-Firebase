import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import database from './firebase/firebase';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getChannels();
  }, []);

  const getChannels = () => {
    database.collection('rooms').onSnapshot((snapshot) => {
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setRooms(rooms);
    });
  };

  console.log(rooms);

  return (
    <AppContainer>
      <Router>
        <Header />
        <Main>
          <Sidebar rooms={rooms} />
          <Switch>
            <Route path="/room" component={Chat} />
            <Route path="/" component={Login} exact />
            <Route>Not Found</Route>
          </Switch>
        </Main>
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

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;
