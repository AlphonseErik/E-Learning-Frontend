import React from 'react'
import classes from "./LoadingScreen.module.scss"

const LoadingScreen = props => {
    return (
        <div className={classes.isLoading}>
            <img align="center" src="/Images/Loading1.svg" alt="Loading Photo" />
        </div>
    )
}

export default LoadingScreen;
