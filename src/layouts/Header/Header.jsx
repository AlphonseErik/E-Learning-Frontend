import React from 'react';
import { Button } from '@material-ui/core';
import classes from './Header.modules.scss';
import LoginPopup from '../../components/Login/LoginPopup';
import RegisterPopup from '../../components/Register/RegisterPopup';
import { connect } from 'react-redux';

const Header = props => {
    const renderPopup = () => {
        return props.user ? (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Button disableRipple={true} disableElevation={true}>
                        Hi, {props.user.fullName}
                    </Button>
                </li>
            </ul>
        ) : (
                <ul className="navbar-nav">
                    <LoginPopup />
                    <RegisterPopup />
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
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"></li>
                        </ul>
                        {renderPopup()}
                    </div>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.userProfile
})

export default connect(mapStateToProps)(Header);
