import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(  // Used for rendering a react component into root.
  <BrowserRouter>  // Allows us to use recat router features inside the component which it wraps(Here it is App.js) like route,link and switch.
    <App />  // App.js component is rendered.
  </BrowserRouter>
);
