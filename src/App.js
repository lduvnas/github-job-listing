import React from "react";
import { Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={StartPage} />
      </Switch>
    </div>
  );
}

export default App;
