import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Main>
          <Sidebar />
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
