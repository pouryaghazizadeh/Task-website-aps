import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureAppStore from "./components/store/configureStore";
import App from "./App";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
