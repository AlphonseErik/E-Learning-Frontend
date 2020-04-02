import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Header from "./layouts/Header/Header";
import { connect } from "react-redux";

const App = props => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/home" exact component={HomeScreen} />

        <Route component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(App);
