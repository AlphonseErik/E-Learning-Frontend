import React from 'react'
import { signInAction } from '../../redux/action/authAction';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { routes } from '../router';

const Login = props => {
    let [user, setUser] = React.useState({
        userLogin: {
            username: "",
            password: "",
        }, errors: {
            username: "",
            password: "",
        },
    })

    const handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = "";
        if (value === "") {
            errorMessage = name.toUpperCase() + ' is required!!!';
        }
        //Check error
        let userLoginUpdate = { ...user.userLogin, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUser({
            userLogin: userLoginUpdate,
            errors: errorsUpdate
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        for (let errorName in user.errors) {
            if (user.errors[errorName] !== "") {
                valid = false;
            }
        }
        for (let valueNotFind in user.userLogin) {
            if (user.userLogin[valueNotFind] === "") {
                valid = false;
            }
        }
        if (valid) {
            console.log(user.userLogin, props.history)
            props.dispatch(signInAction(user.userLogin, props.history));
        } else {
            alert('Please check your Username and Password');
        }
    }

    const renderLogin = () => {
        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Username</h1>
                        <input name="username" type="text" onChange={handleChange} />
                        <p className="text text-danger">{user.errors.username}</p>
                    </div>
                    <div>
                        <h1>Password</h1>
                        <input name="password" type="password" onChange={handleChange} />
                        <p className="text text-danger">{user.errors.password}</p>
                    </div>
                    <Button variant="contained" color="primary" type="submit">Login</Button>
                </form>
            </div>
        )
    }

    return (
        <div>
            {(props.auth && props.user) ? (
                <Redirect to={routes.home} />
            ) : (
                    renderLogin()
                )}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user.userID,
})

export default connect(mapStateToProps)(Login);
