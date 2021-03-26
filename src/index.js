import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import * as atatus from "atatus-spa";
atatus.config("060fcb0a219243afb65cea260a23b57c").install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();
