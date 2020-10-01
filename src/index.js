import React from "react";
import ReactDOM from "react-dom";
import   ContextProvider from "./React_Redux_Counter/Component/reduxProvider";
import { Provider } from "react-redux";
import App from "./App";
import store from './React_Redux_Counter/Component/store'

const rootElement = document.getElementById("root");

ReactDOM.render(
    <ContextProvider store={store} >
      <App />
    </ContextProvider>,
  rootElement
);


