import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Header from "./layouts/Header/Header";
import { connect } from "react-redux";
import { SIGNIN, GET_USER_ID } from "./redux/action/type";
import reduxAction from "./redux/action/action";
import AuthService from "./services/authService";

const authService = new AuthService();

const App = props => {
  React.useEffect(() => {
    const accesstoken = localStorage.getItem("accesstoken");
    const credentials = localStorage.getItem("credentials");
    if (accesstoken) {
      props.dispatch(reduxAction(SIGNIN, JSON.parse(credentials)));
      authService.verifyAccesstoken(accesstoken)
        .then(res => {
          props.dispatch({
            type: GET_USER_ID,
            payload: res.data,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" exact component={HomeScreen} />

        <Route component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(App);
