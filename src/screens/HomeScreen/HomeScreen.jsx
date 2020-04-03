import React from "react";
import { connect } from "react-redux";
import UserService from "../../services/userService";
import { GET_USER_PROFILE } from "../../redux/action/type";

const userService = new UserService();

const HomeScreen = props => {
  React.useEffect(() => {
    if (props.auth && props.user) {
      userService.getProfile(props.user)
        .then(res => {
          props.dispatch({
            type: GET_USER_PROFILE,
            payload: res.data
          })
        }
        )
    }
  }, [props.user], [props.auth])

  return (
    <React.Fragment>

    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user.userID,
})

export default connect(mapStateToProps)(HomeScreen);
