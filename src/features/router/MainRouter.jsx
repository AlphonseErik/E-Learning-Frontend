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
import UserService from "../../services/userService";
import { GET_USER_PROFILE, SIGNIN, GET_USER_ID } from "../../redux/action/type";
import reduxAction from "../../redux/action/action";
import AuthService from "../../services/authService";
import { connect } from "react-redux";


const authService = new AuthService();
const userService = new UserService();

const MainRouter = props => {

    React.useEffect(() => {
        const accesstoken = localStorage.getItem("accesstoken");
        const credentials = localStorage.getItem("credentials");
        if (accesstoken && credentials) {
            props.dispatch(reduxAction(SIGNIN, JSON.parse(credentials)));
            authService.verifyAccesstoken(accesstoken)
                .then(res => {
                    props.dispatch({
                        type: GET_USER_ID,
                        payload: res.data,
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    React.useEffect(() => {
        console.log(props.auth, props.user)
        if (props.auth && props.user) {
            userService.getProfile(props.user)
                .then(res => {
                    props.dispatch({
                        type: GET_USER_PROFILE,
                        payload: res.data
                    })
                }
                )
        }
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