import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";
export default function App() {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
          </Switch>

          <Route path="/" component={Landing} />
        </BrowserRouter>
      </StylesProvider>
    </>
  );
}
