import React from "react";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import StaffDB from "../Dashboard/StaffDB";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const HomeScreen = props => {
  console.log('homescreen', props)

  return (
    <React.Fragment>
      <StaffDB/>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user.isAdmin
})

export default connect(mapStateToProps)(HomeScreen);
