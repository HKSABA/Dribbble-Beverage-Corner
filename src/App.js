import React from "react";
import Header from "./Header";
import Body from "./Body";
import Strawberry from "./Strawberry";
import Avocado from "./Avocado";
import Orange from "./Orange";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/mellon_yellow">
            <Orange />
          </Route>
          <Route path="/green_monster">
            <Avocado />
          </Route>
          <Route path="/strawberry_fields">
            <Strawberry />
          </Route>
          <Route path="/">
            <Header />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
