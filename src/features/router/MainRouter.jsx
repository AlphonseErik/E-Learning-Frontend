import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { routes } from ".";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import Header from "../../layouts/Header/Header";
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRouter from "../HOC/PrivateRouter";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {/*public route */}
                <Route path={routes.login} component={Login} />
                <Route path={routes.register} component={Register} />
                <Redirect to={routes.login} exact />
                {/*private route */}
                <PrivateRouter path={routes.home} Component={HomeScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter;