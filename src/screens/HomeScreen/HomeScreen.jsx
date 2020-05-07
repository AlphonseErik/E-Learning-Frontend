import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { routes } from "../../features/router";
import Dashboard from "../MainScreen/Dashboard";

const HomeScreen = props => {


  return (
    <React.Fragment>
      {props.user ? (
        <Redirect to={routes.dashboard} />
      ) : (<Dashboard />)}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user.isSuperAdmin
})

export default connect(mapStateToProps)(HomeScreen);
