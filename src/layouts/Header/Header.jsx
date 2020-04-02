import React from 'react';
import { Button } from '@material-ui/core';
import classes from './Header.modules.scss';
import LoginPopup from '../../components/Login/LoginPopup';
import RegisterPopup from '../../components/Register/RegisterPopup';
import { connect } from 'react-redux';

const Header = props => {

    const renderPopup = () => {
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <LoginPopup />
                    <RegisterPopup />
                    <Button data-toggle="modal" data-target="#LoginPopup">
                        Login
                    </Button>
                </li>
                <li className="nav-item active">
                    <Button data-toggle="modal" data-target="#RegisterPopup">
                        Register
                    </Button>
                </li>
            </ul>
        )
    }

    return (
        <div className="container">
            <div className={classes.header}>
                <nav className="navbar navbar-expand-lg">
                    <Button color="primary" href="/home">E-Learning</Button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {renderPopup()}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default connect()(Header);
