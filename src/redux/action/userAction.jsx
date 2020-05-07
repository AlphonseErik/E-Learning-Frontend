import { restConnector } from "../../services";
import { routes } from "../../features/router";


export const registerAction = (userRegister, history) => {
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
            if (err.reponse) {
                err.response.data.errors.map(index => {
                    return (alert('ERROR: ' + index.messages))
                })
            }
            return (alert('ERROR NOT FOUND'))
        })
    }
}

export const registerTeacherAction = (userRegister, accesstoken) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/users/register",
            data: {
                type: 1,
                ...userRegister
            },
            headers: {
                accesstoken
            }
        }).then(res => {
            console.log(res.data);
            window.location.reload();
            return (alert('Register Success!!'));
        }).catch(err => {
            console.log(err)
            if (err.reponse) {
                err.response.data.errors.map(index => {
                    return (alert('ERROR: ' + index.messages))
                })
            }
            return (alert('ERROR NOT FOUND'))
        })
    }
}

export const registerStudentAction = (userRegister, accesstoken) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/users/register",
            data: {
                type: 0,
                ...userRegister
            },
            headers: {
                accesstoken,
            }
        }).then(res => {
            console.log(res.data);
            window.location.reload();
            return (alert('Register Success!!'));
        }).catch(err => {
            console.log(err)
            if (err.reponse) {
                err.response.data.errors.map(index => {
                    return (alert('ERROR: ' + index.messages))
                })
            }
            return (alert('ERROR NOT FOUND'))
        })
    }
}