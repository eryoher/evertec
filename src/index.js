import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "lib/AxiosInterceptors";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "nprogress/nprogress.css";

const loadApp = async () => {
  if (process.env.REACT_APP_MOCK_ENABLED) {
    await import("__mocks__");
  }
  ReactDOM.render(<App />, document.getElementById("root"));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

loadApp();
