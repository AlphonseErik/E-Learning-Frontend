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
            localStorage.setItem(settings.accesstoken, res.data.accesstoken);
            localStorage.setItem(settings.credentials, JSON.stringify(res.data));
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accesstoken;
            dispatch(reduxAction(SIGNIN, res.data));
            history.push(`${routes.home}`);
        }).catch(err => {
            console.log(err)
            console.log(err.reponse)
            if (err.reponse) {
                err.response.data.errors.map(index => {
                    return (alert('ERROR: ' + index.messages))
                })
            }
            return (alert('ERROR NOT FOUND'))
        })
    }
}