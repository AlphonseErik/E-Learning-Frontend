import { restConnector } from "../../services";
import reduxAction from "./action";
import { SIGNIN } from "./type";
import { settings } from "../../configs/setting";


export const signInAction = (userLogin) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/auth/signin",
            data: userLogin
        }).then(res => {
            console.log(res.data);
            localStorage.setItem(settings.accesstoken, res.data.accesstoken);
            localStorage.setItem(settings.account, JSON.stringify(res.data));
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;
            dispatch(reduxAction(SIGNIN, res.data));
            window.location.reload();
        }).catch(err => {
            // console.log(err.response.data.errors);
            err.response.data.errors.map(index => {
                return (alert('Error: ' + index.messages))
            })
        })
    }
}