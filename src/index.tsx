import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./store/root";
import "./index.css";
import "../src/tools/colors.css";
import Main from "./App/App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
