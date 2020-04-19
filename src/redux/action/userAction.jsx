import { restConnector } from "../../services";
import { routes } from "../../features/router";


export const registerAction = async(userRegister, history) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/users/register",
            data: userRegister
        }).then(res => {
            console.log(res.data);
            (alert('Register Success!!'));
            history.push(`${routes.login}`);
        }).catch(err => {
            err.response.data.errors.map(index => {
                return (alert('Error: ' + index.messages))
            })
        })
    }
}