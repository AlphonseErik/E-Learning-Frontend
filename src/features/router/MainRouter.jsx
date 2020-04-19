import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import { routes } from ".";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import Header from "../../layouts/Header/Header";
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRouter from "../HOC/PrivateRouter";
import { SIGNIN } from "../../redux/action/type";
import reduxAction from "../../redux/action/action";
import { connect } from "react-redux";
import { authenticate, getProfile } from "./action";

const MainRouter = props => {
    const accesstoken = localStorage.getItem("accesstoken");
    const credentials = localStorage.getItem("credentials");
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                if (accesstoken && credentials) {
                    props.dispatch(reduxAction(SIGNIN, JSON.parse(credentials)));
                    props.dispatch(authenticate(accesstoken))
                } else {

                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [accesstoken], [credentials]);

    React.useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                console.log(props.auth, props.user)
                if (props.auth && props.user) {
                    props.dispatch(getProfile(props.user))
                } else {

                }
            } catch (e) {
                console.log(e)
            }

        }
        fetchUserProfile()
    }, [props.user], [props.auth])

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {/*public route */}
                <Route path={routes.login} component={Login} />
                <Route path={routes.register} component={Register} />
                <Route path="/" exact component={Login} />
                {/*private route */}
                <PrivateRouter path={routes.home} Component={HomeScreen} />
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user.userID,
})

export default connect(mapStateToProps)(MainRouter);