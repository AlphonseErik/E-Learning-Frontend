import React from 'react'
import { registerAction } from '../../redux/action/userAction';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const RegisterPopup = props => {

    let [user, setUser] = React.useState({
        userRegister: {
            username: "",
            password: "",
            fullName: "",
            mobilePhone: "",
            email: "",
        }, errors: {
            username: "",
            password: "",
            fullName: "",
            mobilePhone: "",
            email: "",
        },
    })

    const handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = "";
        if (value === "") {
            errorMessage = name.toUpperCase() + ' is required!!!';
        }
        //Check error
        let useruserRegister = { ...user.userRegister, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUser({
            userRegister: useruserRegister,
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
        for (let valueNotFind in user.userRegister) {
            if (user.userRegister[valueNotFind] === "") {
                valid = false;
            }
        }
        console.log(user.userRegister)
        if (valid) {
            props.dispatch(registerAction(user.userRegister));
        } else {
            alert('Please check your Username and Password');
        }
    }

    const renderPopup = () => {
        return (
            <div className="modal fade" id="RegisterPopup" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
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
                                <div>
                                    <h1>Full Name</h1>
                                    <input name="fullName" type="text" onChange={handleChange} />
                                    <p className="text text-danger">{user.errors.fullName}</p>
                                </div>
                                <div>
                                    <h1>Mobile Phone</h1>
                                    <input name="mobilePhone" type="text" onChange={handleChange} />
                                    <p className="text text-danger">{user.errors.mobilePhone}</p>
                                </div>
                                <div>
                                    <h1>Email</h1>
                                    <input name="email" type="email" onChange={handleChange} />
                                    <p className="text text-danger">{user.errors.email}</p>
                                </div>
                                <Button variant="contained" color="primary" type="submit">Register</Button>
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
            <Button data-toggle="modal" data-target="#RegisterPopup">
                Register
            </Button>
        </li>
    )

}

export default connect()(RegisterPopup);