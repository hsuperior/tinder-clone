import React from "react";
import Header from "./Components/Header";
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
          <Route path="/wilson">
            <h1>hi wilson</h1>
          </Route>
          <Route path="/">
            <h1>I am homepage</h1>
          </Route>
        </Switch>
        {/** Tinder Cards */}
        {/** Buttons below Tinder cards */}
        {/** Chats screen */}
        {/** Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
