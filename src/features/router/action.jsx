import { GET_USER_ID, GET_USER_PROFILE } from "../../redux/action/type";
import AuthService from "../../services/authService";
import UserService from "../../services/userService";

const authService = new AuthService();
const userService = new UserService();

function authenticate(accesstoken) {
    return dispatch => {
        authService.verifyAccesstoken(accesstoken).then(res => {
            dispatch({
                type: GET_USER_ID,
                payload: res.data,
            });
        })
            .catch(err => {
                console.log(err);
            });
    };
}

function getProfile(user) {
    return dispatch => {
        userService.getProfile(user)
            .then(res => {
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: res.data
                })
            }
            )
    }
}

export {
    authenticate,
    getProfile
}