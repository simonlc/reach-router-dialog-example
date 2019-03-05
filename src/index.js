import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import { Dialog } from '@reach/dialog';
import {
  ScoreDialogProvider,
  ScoreDialogContext,
} from './score-dialog-context';

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

function Routes({ location }) {
  return (
    <Router location={location}>
      <Home path="/" />
      <Login path="/login" />
      <Page path="/page/:number" />
    </Router>
  );
}

function App() {
  return (
    <ScoreDialogProvider paths={['/login']}>
      <ScoreDialogContext.Consumer>
        {({ oldLocation, location, navigate }) => (
          <>
            <Routes location={oldLocation != null ? oldLocation : location} />
            <Dialog
              className="score-dialog"
              isOpen={oldLocation != null}
              onDismiss={() => {
                navigate(oldLocation.pathname);
              }}
            >
              <Routes location={location} />
            </Dialog>
          </>
        )}
      </ScoreDialogContext.Consumer>
    </ScoreDialogProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
