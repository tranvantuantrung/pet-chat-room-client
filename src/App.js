import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import "antd/dist/antd.css";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}
