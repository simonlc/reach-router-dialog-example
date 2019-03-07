import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Location } from '@reach/router';
import { Dialog } from '@reach/dialog';

import Login from './login';
import Page from './page';
import Nav from './nav';

import './styles.css';
import '@reach/dialog/styles.css';

function Home({ location }) {
  return (
    <>
      <Nav />
      <h1>Home</h1>
      <Link to="/login">Go to login page without a Dialog</Link>
    </>
  );
}

function Routes(props) {
  return (
    <Router {...props}>
      <Home path="/" />
      <Login path="/login" />
      <Page path="/page/:number" />
    </Router>
  );
}

function App() {
  return (
    <Location>
      {({ location, navigate }) => {
        const { oldLocation } = location.state || {};
        return (
          <>
            <Routes location={oldLocation != null ? oldLocation : location} />
            <Dialog
              isOpen={oldLocation != null}
              onDismiss={() => {
                navigate(oldLocation.pathname);
              }}
            >
              <Routes location={location} />
            </Dialog>
          </>
        );
      }}
    </Location>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
