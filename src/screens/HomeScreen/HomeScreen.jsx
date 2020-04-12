import React from "react";
import { connect } from "react-redux";
import UserService from "../../services/userService";
import { GET_USER_PROFILE, SIGNIN, GET_USER_ID } from "../../redux/action/type";
import reduxAction from "../../redux/action/action";
import AuthService from "../../services/authService";


const authService = new AuthService();
const userService = new UserService();

const HomeScreen = props => {

  React.useEffect(() => {
    const accesstoken = localStorage.getItem("accesstoken");
    const credentials = localStorage.getItem("credentials");
    if (accesstoken && credentials) {
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

  React.useEffect(() => {
    console.log(props.auth, props.user)
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
