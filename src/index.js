import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import App from "./App";

// ADD ROUTING SCOPE HERE

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  rootElement
);
