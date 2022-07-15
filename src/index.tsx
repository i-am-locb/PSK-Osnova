import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store} >
      <App />
    </Provider>
  </HashRouter>
);

reportWebVitals();
