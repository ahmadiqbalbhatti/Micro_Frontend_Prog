import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("MARKETING APP");
// Mount function to start up the app

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if weare in development and in isolation, call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// if er are in running through container, we should export the mount funcation
export { mount };
