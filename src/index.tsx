import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router";

import { RootStore } from "./stores";

import App from "./containers/App";

const rootStore = RootStore.create();

if (process.env.NODE_ENV !== "production") {
  console.log("Staging Mode", rootStore );
}

ReactDOM.render(
  <Provider {...rootStore}>
    <Router history={rootStore.history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
