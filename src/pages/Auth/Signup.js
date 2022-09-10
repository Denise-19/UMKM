import React, { useState } from 'react';
import {
    makeStyles,
} from '@material-ui/core';
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        backgroundImage: `url("/assets/images/bgSignUp.png")`,
        paddingTop: '150px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // [theme.breakpoints.down(1324)]: { //laptop 1324
        //     height: '200vh',
        // },
       
    },
    container: {
        padding: '0 100px',
        paddingBottom: 100,
        [theme.breakpoints.down(1324)]: { //laptop 1324
            padding: "0 10px",
            paddingBottom: 120,
        }
    },
    contentContainer: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
        // display: 'inline-block', 
        
        borderRadius: 30,
        marginTop: 30,
        width: '100%',
        padding: '0 100px',
        [theme.breakpoints.down(1324)]: { //laptop 1324
            backgroundColor: '#fff',
            padding: '0 10px',
        }
    },
    input: {
        backgroundColor: '#DBDBDB',
        opacity: 1,
        border: 'none',
        paddingLeft: 30,
        marginTop: 15,
        height: 41,
        borderRadius: 8,
    },
    inputGroup: {
        height: 41,
        marginTop: 15,
        background: '#DBDBDB',
        cursor: 'pointer',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    imageRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down(1324)]: { //laptop 1324
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    image: {
        height: 'auto',
        width: 'auto',
    }
}));

const Signup = () => {
    const classes = useStyles();
    const [passwordType, setPasswordType] = useState('password')
    const [confirmPasswordType, setConfirmPasswordType] = useState('password')
    const [userName, setUserName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [errorUserName, setErrorUserName] = useState('')
    const [errorBusinessName, setErrorBusinessName] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const togglePasswordConfirm = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    const handleChangeInput = (e) => {
        // console.log(e.target)
        const { id, value } = e.target
        if (id === "userName") {
            setUserName(value)
            setErrorUserName('')
        }
        if (id === "businessName") {
            setBusinessName(value)
            setErrorBusinessName('')
        }
        if (id === "phone") {
            setPhone(value)
            setErrorPhone('')
        }
        if (id === "email") {
            setEmail(value)
            setErrorEmail('')
        }
        if (id === "password") {
            setPassword(value)
            setErrorPassword('')
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value)
            setErrorConfirmPassword('')
        }
    }

    const handleRegister = async () => {
        try {
            setLoading(true)
            const url = 'https://coopdar.com/coopdar-backend/api/register';
            const data = {
                username: userName,
                business_name: businessName,
                phone: phone,
                email: email,
                password: password,
                password_confirmation: confirmPassword
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
            setErrorUserName(result.username)
            setErrorBusinessName(result.business_name)
            setErrorPhone(result.phone)
            setErrorEmail(result.email)
            setErrorPassword(result.password)
            setErrorConfirmPassword(result.password_confirmation)
            setLoading(false)
            if (result.status === "success") {
                Swal.fire({
                    title: "Success",
                    text: result.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                  }).then(function () {
                    // Redirect the user
                    window.location.href = "/signin";
                  });
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={` ${classes.imageContainer}`}>

            <div className='d-flex flex-column align-items-center' >
                <div className='d-flex flex-column text-center' style={{ marginBottom: '5vh' }}>
                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 36, color: 'white', lineHeight: 1 }}>Daftarkan Akun Anda.</p>
                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 36, color: 'white', lineHeight: 1 }}>Menjadi Pemberi Pendanaan atau Penerima</p>
                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 36, color: 'white', lineHeight: 1 }}>Pendanaan.</p>
                </div>
            </div>

            <div className={`d-flex flex-column align-items-center ${classes.container}`}>
                <div className={classes.contentContainer}>

                    <div className='d-flex flex-column align-items-center' style={{ marginTop: -50 }}>
                        <img src='../assets/icons/UserIcon.png' style={{ width: 150, height: 'auto' }} />
                        <p style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 700, color: '#000000', marginTop: 10 }}>Register</p>
                    </div>

                    <div className={`row`}>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <form>
                                <div className='d-flex flex-column align-self-start' >
                                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 40, color: '#3F3F3F', textAlign: 'start' }}>Hello!!</span>
                                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 40, color: '#3F3F3F', textAlign: 'start' }}>Welcome To</span>
                                    <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 48, color: '#9C8430', textAlign: 'start' }}>COOPDAR</span>
                                    <input type='text' id='userName' value={userName} onChange={(e) => handleChangeInput(e)} className={`form-control ${classes.input}`} placeholder='Enter Username' />
                                    {errorUserName && errorUserName.map((eUserName, iUserName) => (<span key={iUserName} className="text-danger">{eUserName}</span>))}
                                    <input type='text' id='businessName' value={businessName} onChange={(e) => handleChangeInput(e)} className={`form-control ${classes.input}`} placeholder='Business Name' />
                                    {errorBusinessName && errorBusinessName.map((ebusName, ibusName) => (<span key={ibusName} className="text-danger">{ebusName}</span>))}
                                    <input type='number' id='phone' value={phone} onChange={(e) => handleChangeInput(e)} className={`form-control ${classes.input}`} placeholder='Phone Number' />
                                    {errorPhone && errorPhone.map((ePhone, iPhone) => (<span key={iPhone} className="text-danger">{ePhone}</span>))}
                                    <input type='text' id='email' value={email} onChange={(e) => handleChangeInput(e)} className={`form-control ${classes.input}`} placeholder='Enter your Email' />
                                    {errorEmail && errorEmail.map((eEmail, iEmail) => (<span key={iEmail} className="text-danger">{eEmail}</span>))}
                                    <div className={`input-group`}>
                                        <input type={passwordType} id='password' onChange={(e) => handleChangeInput(e)} value={password} className={`form-control ${classes.input}`} placeholder="Enter your Password" />
                                        <span onClick={togglePassword} className={`input-group-text ${classes.inputGroup}`}>
                                            {passwordType === "password" ? <i className="fa fa-solid fa-eye-slash"></i> : <i className="fa fa-solid fa-eye"></i>}
                                        </span>
                                    </div>
                                    {errorPassword && errorPassword.map((ePassword, iPassword) => (<span key={iPassword} className="text-danger">{ePassword}</span>))}
                                    <div className={`input-group`}>
                                        <input type={confirmPasswordType} id='confirmPassword' onChange={(e) => handleChangeInput(e)} value={confirmPassword} className={`form-control ${classes.input}`} placeholder="Confirm Password" />
                                        <span onClick={togglePasswordConfirm} className={`input-group-text ${classes.inputGroup}`}>
                                            {confirmPasswordType === "password" ? <i className="fa fa-solid fa-eye-slash"></i> : <i className="fa fa-solid fa-eye"></i>}
                                        </span>
                                    </div>
                                    {errorConfirmPassword && errorConfirmPassword.map((ePasswordConfirm, iPasswordConfirm) => (<span key={iPasswordConfirm} className="text-danger">{ePasswordConfirm}</span>))}
                                    <div>
                                        <button type="button" onClick={handleRegister} className="btn btn-block" style={{ backgroundColor: '#459DDF', borderRadius: 9, width: '100%', marginTop: 28, marginBottom: 90, color: '#fff' }}>{loading ? 'Loading...' : 'Submit'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className={`col-lg-6 col-md-6 col-sm-12 ${classes.imageRight}`}>
                            <img src='../assets/images/SignUp1.png' className={classes.image} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup;