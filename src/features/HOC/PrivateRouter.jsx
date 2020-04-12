import React from "react"
import { Route, Redirect } from "react-router-dom";
import { routes } from "../router";


const PrivateRouter = props => {
    const { path, Component } = props;

    return (
        <Route path={path} render={(routeProps) => {
            const accessToken = localStorage.getItem('accesstoken');
            return (accessToken) ? (
                <Component {...routeProps} />
            ) : (
                    <Redirect to={routes.login} />
                )
        }} />
    )
}

export default PrivateRouter;