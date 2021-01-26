import React from "react";
import { Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import DetailPage from "./pages/DetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Workfinder</h1>
      <Switch>
        <Route path="/job/:id/" component={DetailPage} />
        <Route path="/" component={StartPage} />
      </Switch>
    </div>
  );
}

export default App;
