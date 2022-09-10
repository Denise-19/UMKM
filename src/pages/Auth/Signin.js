import React, { useState, useRef, useEffect } from 'react';
import {
    makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
// import { GoogleLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
import { useScript } from "../../helpers/useScript";
import jwt_deocde from "jwt-decode";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        backgroundImage: `url("/assets/images/SignInBackground.png")`,
        paddingTop: '82px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
        [theme.breakpoints.down(1324)]: { //laptop 1324
            backgroundSize: '100% 100%',
        }

    },
    container: {
        padding: '80px 100px',
        [theme.breakpoints.down(1324)]: { //laptop 1324
            padding: "80px 20px",
        }
    },
    loginImage: {
        marginTop: '-50px',
    },

    rightContainer: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(to right, rgba(255,255,255, 0.5), rgba(255,255,255, 0.5))',
        borderRadius: 30,
    },
    inputGroup: {
        height: 52,
        background: '#fff',
        cursor: 'pointer',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        border: 'none'
    },
}));

const BtnGoogleLogin = () => {
    return (
        <button type="button" className="btn btn-block" style={{ marginTop: 10, marginBottom: 24, backgroundColor: '#459DDF', borderRadius: 9, color: '#fff' }}>Sign in with Google</button>
    )
}

const Signin = () => {
    const googlebuttonref = useRef();
    const classes = useStyles();
    const [passwordType, setPasswordType] = useState('password')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // googleLogout();

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const handleChangeInput = (e) => {
        const { id, value } = e.target
        if (id === "email") {
            setEmail(value)
            setErrorEmail('')
        }
        if (id === "password") {
            setPassword(value)
            setErrorPassword('')
        }
    }

    const handleLogin = async () => {
        try {
            setLoading(true)
            const url = 'https://coopdar.com/coopdar-backend/api/login';
            const data = {
                email: email,
                password: password,
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(url, options)
            const result = await response.json()
            // console.log(result)
            setErrorEmail(result.email)
            setErrorPassword(result.password)
            setLoading(false)
            if (result.status === "success") {
                localStorage.setItem('authToken', result.token)
                Swal.fire({
                    title: "Success",
                    text: result.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                }).then(function () {
                    // Redirect the user
                    window.location.href = "/register-progress";
                });
                setLoading(false)
            }
            if (result.status === "error") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: result.message,
                })
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const clientId = '41896975238-d3a9774pt2vro31bqk5of55ommavpbi3.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const handleLoginGoogle = async (res) => {
        // console.log('success:', res.accessToken);
        try {
            const url = 'https://coopdar.com/coopdar-backend/api/googleLogin';
            const data = {
                token_google: res.accessToken,
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(url, options)
            const result = await response.json()
            // console.log(result)
            if (result.status === "success") {
                localStorage.setItem('authToken', result.token)
                Swal.fire({
                    title: "Success",
                    text: result.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                }).then(function () {
                    // Redirect the user
                    window.location.href = "/register-progress";
                });
            }
            if (result.status === "error") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: result.message,
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    // const onGoogleSignIn = (user) => {
    //     console.log(user)
    //     let userCred = user.credential;
    //     console.log('usercred', userCred)
    //     let payload = jwt_deocde(userCred);
    //     console.log(payload);
    //     // setuser(payload);
    // };
    // useScript("https://accounts.google.com/gsi/client", () => {
    //     window.google.accounts.id.initialize({
    //         client_id: '41896975238-d3a9774pt2vro31bqk5of55ommavpbi3.apps.googleusercontent.com', // here's your Google ID
    //         callback: onGoogleSignIn,
    //         auto_select: false,
    //     });

    //     window.google.accounts.id.renderButton(googlebuttonref.current, {
    //         size: "medium",
    //         text: "Sign in with Google",
    //     });
    // });

    // const handleLoginGoogle = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log('token google', tokenResponse),
    //   });

    return (
        <div className={` ${classes.imageContainer}`}>
            <div className={`row ${classes.container}`}>

                <div className='col-lg-6 col-md-6 col-sm-12' style={{ lineHeight: 1, marginBottom: 70 }}>
                    <p style={{ color: 'white', fontFamily: 'Inter', fontSize: 64, fontWeight: 500 }}>Hello!!</p>
                    <p style={{ color: 'white', fontFamily: 'Inter', fontSize: 64, fontWeight: 500 }}>Welcome To</p>
                    <p style={{ color: 'white', fontFamily: 'Inter', fontSize: 64, fontWeight: 800 }}>COOPDAR</p>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={classes.rightContainer}>
                        <div className={`d-flex justify-content-center ${classes.loginImage}`}>
                            <img src='../assets/icons/UserIcon.png' style={{ width: 100, height: 'auto' }} />
                        </div>
                        <p style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 700, color: '#000000', textAlign: 'center' }}>Login</p>

                        <form>
                            <div className='d-flex flex-column ' style={{ padding: '0 35px' }}>
                                <div className='input-group' style={{ backgroundColor: 'white', borderRadius: 5 }}>
                                    <span className='input-group-text' style={{ backgroundColor: '#459DDF', height: '52px', width: '50px', borderRadius: 5 }}>
                                        <img src='../assets/icons/AccountIcon.png' />
                                    </span>
                                    <input type='text' id="email" value={email} onChange={(e) => handleChangeInput(e)} className='form-control' style={{ height: '50px', backgroundColor: 'white', opacity: 1, border: 'none', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                                </div>
                                {errorEmail && errorEmail.map((eEmail, iEmail) => (<span key={iEmail} className="text-danger">{eEmail}</span>))}

                                <div className='input-group mt-3' style={{ backgroundColor: 'white', borderRadius: 5 }}>
                                    <span className='input-group-text' style={{ backgroundColor: '#459DDF', height: '52px', width: '50px', borderRadius: 5 }}>
                                        <img src='../assets/icons/PasswordIcon.png' />
                                    </span>
                                    <input type={passwordType} id="password" value={password} onChange={(e) => handleChangeInput(e)} className='form-control' style={{ height: '50px', backgroundColor: 'white', opacity: 1, border: 'none', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                                    <span onClick={togglePassword} className={`input-group-text ${classes.inputGroup}`}>
                                        {passwordType === "password" ? <i className="fa fa-solid fa-eye-slash"></i> : <i className="fa fa-solid fa-eye"></i>}
                                    </span>
                                </div>
                                {errorPassword && errorPassword.map((ePassword, iPassword) => (<span key={iPassword} className="text-danger">{ePassword}</span>))}

                                <button type="button" onClick={handleLogin} className="btn btn-lg mt-4" style={{ backgroundColor: '#459DDF', borderRadius: 9, color: '#fff', marginBottom: 20 }}>{loading ? 'Loading...' : 'Sign in'}</button>

                                {/* <div style={{ width: 500 }}>
                                    <div ref={googlebuttonref} ></div>
                                </div> */}
                                {/* <BtnGoogleLogin onClick={() => handleLoginGoogle()}/> */}
                                {/* <GoogleLogin
                                    onSuccess={(credentialResponse) => handleLoginGoogle(credentialResponse)}
                                    onError={(error) => handleFailure(error)}
                                    text="Sign in with Google"
                                    size='large'
                                    theme='outline'
                                /> */}

                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Sign in with Google"
                                    onSuccess={handleLoginGoogle}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    // isSignedIn={true}
                                />

                                <div className='row' style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
                                    <div className='form-check col-6'>
                                        <input type="checkbox" className='form-check-input' />
                                        <label className='form-check-label' style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 16, color: 'black' }}>Remember me</label>
                                    </div>
                                    <div className='col-6' style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 16, color: 'black' }}>
                                        Forgot Password?
                                        <Link to='/' style={{ textDecoration: 'none', cursor: 'pointer', fontFamily: 'Poppins', fontWeight: 500, fontSize: 16, color: 'black' }}> click here</Link>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className='d-flex justify-content-evenly align-items-center' style={{ backgroundColor: '#9C8430', borderRadius: 30, marginTop: 30 }}>
                            <img src='../assets/icons/PadiIcon.png' style={{ marginTop: 10, marginBottom: 10 }} />
                            <img src='../assets/icons/SapiIcon.png' style={{ marginTop: 10, marginBottom: 10 }} />
                            <img src='../assets/icons/BuahIcon.png' style={{ marginTop: 10, marginBottom: 10 }} />
                        </div>

                    </div>
                    <div className='d-flex flex-column text-center' style={{ marginTop: '8vh', marginBottom: 100 }}>
                        <span style={{ font: 'Inter', fontWeight: 800, fontSize: 64, color: 'white' }}>{`DECIDE FATER`}</span>
                        <span style={{ font: 'Inter', fontWeight: 500, fontSize: 40, color: 'white' }}>SO YOU CAN DO  MORE</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Signin;