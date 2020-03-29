import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/homeScreen";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeScreen} />

        <Route component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
