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

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {/*public route */}
                <Redirect path="/" to={routes.home} exact />
                <Route path={routes.home}>
                    <HomeScreen />
                </Route>
                {/*private route */}
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter;