import { restConnector } from "../../services";
import reduxAction from "./action";
import { SIGNIN } from "./type";
import { settings } from "../../configs/setting";
import { routes } from "../../features/router";


export const signInAction = (userLogin, history) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/auth/signin",
            data: userLogin
        }).then(res => {
            console.log(res.data);
            console.log(history)
            localStorage.setItem(settings.accesstoken, res.data.accesstoken);
            localStorage.setItem(settings.credentials, JSON.stringify(res.data));
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;
            dispatch(reduxAction(SIGNIN, res.data));
            history.push('/home');
        }).catch(err => {
            console.log(err);
        })
    }
}