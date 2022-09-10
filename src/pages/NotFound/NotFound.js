import React from 'react'
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    notFound: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(68, 68, 68)',
        minHeight: '80vh',
    },
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.notFound}>
            <h2 style={{ fontSize: '55px', fontFamily: 'poppins' }}>404</h2>
            <p style={{ fontSize: '20px', fontFamily: 'poppins' }}>Page not found</p>
        </div>
    )
}

export default NotFound