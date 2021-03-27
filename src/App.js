import React from "react";
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chatpage</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/** Buttons below Tinder cards */}
        {/** Chats screen */}
        {/** Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
