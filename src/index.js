import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import "./styles.css";

function Home() {
  return <div>Home</div>;
}

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
