import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GridProvider } from "./components/DnDgrit/GridContext";
import store from "../src/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <GridProvider>
        <App />
      </GridProvider>
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
