import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ArsenalContextProvider } from "./context/ArsenalContext";
import { ContactContextProvider } from "./context/ContactContext";

import "./index.css";

ReactDOM.render(
  <ContactContextProvider>
    <ArsenalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ArsenalContextProvider>
  </ContactContextProvider>,
  document.getElementById("root")
);
