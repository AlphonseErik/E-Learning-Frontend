import { restConnector } from "../../services";


export const registerAction = (userRegister) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/users/register",
            data: userRegister
        }).then(res => {
            console.log(res.data);
            window.location.reload();
            (alert('Register Success!!'));
        }).catch(err => {
            err.response.data.errors.map(index => {
                return (alert('Error: ' + index.messages))
            })
        })
    }
}