import { GET_USER_ID, GET_USER_PROFILE } from "../../redux/action/type";
import AuthService from "../../services/authService";
import UserService from "../../services/userService";

const authService = new AuthService();
const userService = new UserService();

export function authenticate({ accesstoken }) {
    return async dispatch => {
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

export function getProfile(user) {
    return async dispatch => {
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