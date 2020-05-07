import React from "react";
import { connect } from "react-redux";
import Dashboard from "../MainScreen/Dashboard";

const HomeScreen = props => {
  console.log('homescreen', props)

  return (
    <React.Fragment>
      <Dashboard/>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user.isAdmin
})

export default connect(mapStateToProps)(HomeScreen);
