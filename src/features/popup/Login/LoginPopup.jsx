import React from 'react'
import { signInAction } from '../../../redux/action/authAction';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const LoginPopup = props => {
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
            props.dispatch(signInAction(user.userLogin));
        } else {
            alert('Please check your Username and Password');
        }
    }

    const renderPopup = () => {
        return (
            <div className="modal fade" id="LoginPopup" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
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
                    </div>
                </div>
            </div>

        )
    }

    return (
        <li className="nav-item active">
            {renderPopup()}
            <Button data-toggle="modal" data-target="#LoginPopup">
                Login
            </Button>
        </li>
    )
}

export default connect()(LoginPopup);
