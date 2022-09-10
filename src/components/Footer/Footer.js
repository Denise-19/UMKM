import React from "react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
       
        marginTop: '200px',
        [theme.breakpoints.down(768)]: { //mobile 768
            margin: '30px'
        }
    },
}));

const Footer = () => {
    const classes = useStyles();
    return(
        <footer style={{ backgroundColor: '#373737'}}>
            <div className={`d-flex align-content-start flex-wrap container ${classes.container}`}>
                <div className='d-flex flex-column col-lg-4 col-md-4 col-sm-12' style={{ marginTop: 13}}>
                    <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: 600, fontSize: 20}}>Follow Us</p>
                    <div className='d-flex'>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div className='d-flex flex-column col-lg-4 col-md-4 col-sm-12' style={{ marginTop: 13, }}>
                    <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: 600, fontSize: 20}}>Contact Us</p>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            <img src='../assets/icons/LocationIcon.png' style={{ alignSelf: 'start', marginRight: 6}}/>
                            <p style={{fontFamily: 'Poppins', fontSize: 10, fontWeight: 300, color: 'white', maxWidth: 228}}>Daerah Khusus Ibukota Jakarta</p>
                        </div>
                        <div className='d-flex'>
                            <img src='../assets/icons/MailIcon.png' style={{ alignSelf: 'start', marginRight: 6}}/>
                            <p style={{fontFamily: 'Poppins', fontSize: 10, fontWeight: 300, color: 'white', maxWidth: 228}}></p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column col-lg-4 col-md-4 col-sm-12' style={{ marginTop: 13, }}>
                    <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: 600, fontSize: 20}}>Contact Us</p>
                    <div className='d-flex flex-column'>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: 'white'}}>KARIR</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: 'white'}}>SYARAT DAN KETENTUAN</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: 'white'}}>KEBIJAKAN PRIVASI</span>
                        <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: 'white'}}>FAQ</span>
                    </div>
                </div>
            </div>
            <div className='d-flex align-content-start flex-wrap' style={{marginLeft: 157, marginTop: 30, paddingBottom: 4}}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: 10, color: 'white'}}>© 2022 coopdar.</span>
            </div>
        </footer>
    )
}

export default Footer;