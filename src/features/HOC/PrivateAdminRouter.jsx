import React from "react"
import { Route, Redirect } from "react-router-dom";
import { routes } from "../router";

const PrivateRouter = props => {
    const { path, Component } = props;

    console.log('123', props.user)

    return (
        <Route path={path} render={(routeProps) => {
            const accessToken = localStorage.getItem('accesstoken');
            const isSuperAdmin = localStorage.getItem('isSuperAdmin');
            return (accessToken && isSuperAdmin) ? (
                <Component {...routeProps} />
            ) : (
                    <Redirect to={routes.login} />
                )
        }} />
    )
}

export default PrivateRouter;